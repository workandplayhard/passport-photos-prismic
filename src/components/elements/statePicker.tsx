import React, { useCallback, useEffect, useState } from 'react'
import { FormField } from '@/apollo'
import { RegionDropdown } from 'react-country-region-selector'
import classNames from 'classnames'

interface StatePickerProps {
  className?: string | undefined
  formField: FormField
  country?: string
  selectedState: (name: string, country: string) => void
  error: string | undefined
}

const StatePicker: React.FC<StatePickerProps> = ({
  className = 'half-size',
  formField,
  country = 'US',
  selectedState,
  error,
}) => {
  const [state, setState] = useState<string>('')

  useEffect(() => {
    setState(formField.value ?? '')
  }, [formField.value])

  const selectState = useCallback(
    (state: string) => {
      selectedState(formField.name, state)
      setState(state)
    },
    [formField.name, selectedState],
  )

  if (!['US', 'CA'].includes(country)) return null

  return (
    <label className={className}>
      <span className="label">
        {formField.text}
        {formField.required && (country === 'US' || country === 'CA')
          ? ' *'
          : ''}
      </span>
      <span className="field select">
        <RegionDropdown
          countryValueType={'short'}
          valueType={'short'}
          country={country}
          value={state}
          name={formField.name}
          disabled={!(country === 'US' || country === 'CA')}
          onChange={selectState}
          classes={classNames({
            'error-border': !!error,
          })}
        />
      </span>
      {error ? <span className="attention">{error}</span> : <></>}
    </label>
  )
}

export default StatePicker
