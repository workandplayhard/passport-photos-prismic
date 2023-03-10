import React from 'react'
import classNames from 'classnames'

import { FieldType, FormField } from '@/apollo'
import RadioOption from '@/components/elements/radioOption'
import TextInput from '@/components/elements/textInput'
import CountryPicker from '@/components/elements/countryPicker'
import StatePicker from '@/components/elements/statePicker'
import AppDatePicker from '@/components/elements/datePicker'
import SelectBox from '@/components/elements/selectBox'
import PhoneInput from '@/components/elements/phoneInput'

interface Props {
  field: FormField
  country: string | undefined
  error: string | undefined
  onValueChange: (
    name: string,
    value: string | number | boolean | undefined,
  ) => void
  onSelectCountry: (name: string, value: string) => void
}

const FormElement: React.FC<Props> = ({
  field,
  country,
  error,
  onValueChange,
  onSelectCountry,
}) => {
  if (field.type === FieldType.Input) {
    return (
      <TextInput
        className={field.size || undefined}
        formField={field}
        onValueChange={onValueChange}
        error={error}
      />
    )
  }

  if (field.type === FieldType.PhoneInput) {
    return (
      <PhoneInput
        className={field.size || undefined}
        country={country}
        formField={field}
        onValueChange={onValueChange}
        error={error}
      />
    )
  }

  if (field.type === FieldType.Select) {
    return (
      <SelectBox
        className={field.size || undefined}
        formField={field}
        onValueChange={onValueChange}
        error={error}
      />
    )
  }

  if (field.type === FieldType.CountryPicker) {
    return (
      <CountryPicker
        className={classNames(
          country?.toLowerCase(),
          field.size || 'half-size',
        )}
        formField={field}
        selectedCountry={onSelectCountry}
        error={error}
      />
    )
  }

  if (field.type === FieldType.StatePicker) {
    return (
      <StatePicker
        className={field.size || undefined}
        formField={field}
        selectedState={onValueChange}
        country={country}
        error={error}
      />
    )
  }

  if (field.type === FieldType.DatePicker) {
    return (
      <AppDatePicker
        className={field.size || undefined}
        formField={field}
        onValueChange={onValueChange}
        error={error}
      />
    )
  }

  if (field.type === FieldType.Radio) {
    return (
      <RadioOption
        className={field.size || undefined}
        formField={field}
        onValueChange={onValueChange}
        error={error}
      />
    )
  }

  return null
}

export default FormElement
