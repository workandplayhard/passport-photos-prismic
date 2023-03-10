import { isValidPhoneNumber, parsePhoneNumber } from 'react-phone-number-input'

import { FieldType, FormField, ValidationType } from '@/apollo'
import { ValidationError } from '@/types'

export const formValidation = (
  fields: FormField[],
  country = 'US',
): ValidationError => {
  const error: ValidationError = {}
  for (const field of fields) {
    if (
      !field.disabled &&
      field.required &&
      (field.value === undefined || field.value === null || field.value === '')
    ) {
      if (field.type === FieldType.StatePicker && country !== 'US') {
        continue
      } else {
        error[field.name] = `This field is required.`
        continue
      }
    }
    if (
      field.required &&
      field.options &&
      (field.type === FieldType.Radio || field.type === FieldType.Select)
    ) {
      const a = field.options.find(
        (x) => x.value.toString() === field.value?.toString(),
      )
      if (!a) {
        error[field.name] = `This should be one of Options`
        continue
      }
    }
    if (
      field.required &&
      field.type === FieldType.CheckBox &&
      typeof field.value !== 'boolean'
    ) {
      error[field.name] = `This should be boolean type`
      continue
    }

    if (field.required && field.validations) {
      field.validations.forEach((v) => {
        field.value = field.value ?? ''
        switch (v.type) {
          case ValidationType.IsEmail:
            if (
              !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                field.value.toString(),
              )
            ) {
              error[field.name] = `This should be email format.`
            }
            break
          case ValidationType.IsPhone:
            const isValid = isValidPhoneNumber(field.value.toString())
            const parsed = parsePhoneNumber(field.value.toString())

            if (!isValid || parsed?.country !== country) {
              error[
                field.name
              ] = `This should have ${country} phone number type.`
            }
            break
          case ValidationType.MaxLength:
            const maxLength = v.value || 0
            if (field.value.toString().length > maxLength) {
              error[
                field.name
              ] = `This should have less than ${maxLength} length`
            }
            break
          case ValidationType.MinLength:
            const minLength = v.value || 0
            if (field.value.toString().length < minLength) {
              error[
                field.name
              ] = `This should have longer than ${minLength} length`
            }
            break
          case ValidationType.Max:
            const max = v.value || 0
            if (Number(field.value) > max) {
              error[field.name] = `This should have less than ${max}`
            }
            break
          case ValidationType.Min:
            const min = v.value || 0
            if (Number(field.value) > min) {
              error[field.name] = `This should have greater than ${min}`
            }
            break
          case ValidationType.Nullable:
            break
        }
      })
    }
  }
  return error
}
