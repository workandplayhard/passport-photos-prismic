import React, { useMemo } from 'react'
import Select, { components } from 'react-select'
import countryList from 'react-select-country-list'
import { ValueContainerProps } from 'react-select/dist/declarations/src/components/containers'
import { countriesCode } from '@/constants/countries'

export interface ICountry {
  label: string
  value: string
}

export function CountryFlag(props: { code: string; size?: string }) {
  return (
    <span
      className={'flag-icon flag-icon-' + props.code}
      style={{ fontSize: props.size || '25px' }}
    />
  )
}

export const CountryFlagSelectOption = (props: any) => (
  <components.Option {...props}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <CountryFlag size={props.flagSize} code={props.value.toLowerCase()} />
      <span style={{ marginLeft: '8px' }}>{props.label}</span>
    </div>
  </components.Option>
)

export const CountryFlagValueContainer: React.FC<
  ValueContainerProps<ICountry>
> = ({ children, ...props }) => {
  const code = (props.hasValue && props.getValue()[0].value) || false

  return (
    <div className="country-picker-value">
      {(code && <CountryFlag code={code.toLowerCase()} />) || null}
      <components.ValueContainer {...props}>
        {children}
      </components.ValueContainer>
    </div>
  )
}

const styles = {
  valueContainer: (base: any) => {
    const height = '55px'
    return { ...base, height }
  },
  menuPortal: (provided: any) => ({
    ...provided,
    zIndex: 9999,
  }),
}

export interface CountrySelectorProps {
  country: ICountry | undefined
  onSelectCountry: (value: ICountry) => void
}

const CountrySelector: React.FC<CountrySelectorProps> = ({
  country,
  onSelectCountry,
}) => {
  const options = useMemo<ICountry[]>(() => {
    const all = countryList().getData()
    return all.filter((c) => countriesCode.includes(c.value))
  }, [])

  const changeHandler = (value: any) => {
    onSelectCountry(value)
  }

  return (
    <Select
      styles={styles}
      options={options}
      value={country}
      onChange={changeHandler}
      menuPortalTarget={document.body}
      components={{
        Option: CountryFlagSelectOption,
        ValueContainer: CountryFlagValueContainer,
      }}
    />
  )
}

export default CountrySelector
