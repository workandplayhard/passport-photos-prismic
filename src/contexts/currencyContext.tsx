import React, { useCallback, useEffect, useState, createContext } from 'react'

import {
  Currency,
  CurrencyCode,
  CurrencyType,
  useCurrenciesLazyQuery,
  useSetDefaultCurrencyMutation,
  Maybe,
} from '@/apollo'
import { useAuth } from '@/hooks'

interface ICurrencyContext {
  currencies: Currency[] | undefined
  currentCurrency: Currency | undefined
  loading: boolean
  onChangeCurrencyByCountry: (countryCode: Maybe<string> | undefined) => void
  onChangeCurrency: (currency: Currency | undefined) => void
}

const initialValue: ICurrencyContext = {
  currencies: undefined,
  currentCurrency: undefined,
  loading: false,
  onChangeCurrencyByCountry: () => null,
  onChangeCurrency: () => null,
}

export const CurrencyContext = createContext<ICurrencyContext>(initialValue)

export const CurrencyProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const { me: user, cart, updateMe } = useAuth()

  const [currencies, setCurrencies] = useState<Currency[] | undefined>()
  const [currentCurrency, setCurrentCurrency] = useState<Currency | undefined>()

  const [fetchCurrencies, { loading }] = useCurrenciesLazyQuery({
    onCompleted: (res) => {
      setCurrencies(res?.Currencies?.data || [])
    },
  })

  const [setDefaultCurrency] = useSetDefaultCurrencyMutation({
    fetchPolicy: 'network-only',
    onCompleted: (res) => {
      updateMe({ cart: res.SetDefaultCurrency.data || cart })
    },
  })

  const onChangeCurrencyByCountry = useCallback(
    (countryCode: Maybe<string> | undefined) => {
      if (!countryCode) return
      let _currency: Currency = {
        label: CurrencyType.Usd,
        code: CurrencyCode.Us,
        symbol: '$',
      }

      if (countryCode === 'GB') {
        _currency = {
          label: CurrencyType.Gbp,
          code: CurrencyCode.Gb,
          symbol: '£',
        }
      } else if (countryCode === 'CA') {
        _currency = {
          label: CurrencyType.Cad,
          code: CurrencyCode.Ca,
          symbol: 'C$',
        }
      } else if (['DE', 'FR', 'IT', 'ES'].includes(countryCode)) {
        _currency = {
          label: CurrencyType.Eur,
          code: CurrencyCode.Eu,
          symbol: '€',
        }
      }

      setCurrentCurrency(_currency)
      if (_currency.code !== currentCurrency?.code) {
        setDefaultCurrency({
          variables: {
            currency: _currency,
          },
        })
      }
    },
    [currentCurrency?.code, setDefaultCurrency],
  )

  useEffect(() => {
    if (currencies) return
    fetchCurrencies()
  }, [currencies, fetchCurrencies])

  useEffect(() => {
    if (!cart || currentCurrency) return
    if (cart?.defaultCurrency) {
      setCurrentCurrency(cart.defaultCurrency)
    } else {
      onChangeCurrencyByCountry(user?.country)
    }
  }, [currentCurrency, cart, user?.country, onChangeCurrencyByCountry])

  const onChangeCurrency = useCallback(
    (currency: Currency | undefined) => {
      if (!currency || !currentCurrency) return
      if (currency.code === currentCurrency.code) return

      setCurrentCurrency(currency)
      setDefaultCurrency({
        variables: {
          currency,
        },
      })
    },
    [currentCurrency, setDefaultCurrency],
  )

  return (
    <CurrencyContext.Provider
      value={{
        currencies,
        currentCurrency,
        loading,
        onChangeCurrency,
        onChangeCurrencyByCountry,
      }}>
      {children}
    </CurrencyContext.Provider>
  )
}
