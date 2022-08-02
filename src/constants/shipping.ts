import {
  ShippingType,
  ProductSku,
  ValidationType,
  FieldType,
  FormField,
} from '@/generated/types'

export const shippingTypes = (
  countryCode = 'US',
): {
  title: string
  productSku: ProductSku
  value: ShippingType
}[] => [
  {
    title:
      countryCode === 'GB'
        ? 'Standard Shipping (2-3 Working Days)'
        : 'Standard Shipping (2-3 Working Days)',
    productSku: ProductSku.StandardShipping,
    value: ShippingType.From3To6,
  },
  {
    title:
      countryCode === 'GB'
        ? 'Priority Service (Next Working Day)'
        : 'Expedited 1-2 business days',
    productSku:
      countryCode === 'GB'
        ? ProductSku.PriorityService
        : ProductSku.ExpeditedShipping,
    value: ShippingType.From1To2,
  },
  /*
  {
    title: `No, I'm sure I don't want the concierge service and I will print my photos on my own.`,
    productSku: ProductSku.Free,
    value: ShippingType.NoShipping,
  },
  */
]

export const SHIPPING_BILLING_FORM: { [key: string]: FormField } = {
  firstName: {
    index: 0,
    type: FieldType.Input,
    name: 'firstName',
    text: 'First Name',
    required: true,
    placeholder: 'Input First name',
  },
  lastName: {
    index: 1,
    type: FieldType.Input,
    name: 'lastName',
    text: 'Last Name',
    required: true,
    placeholder: 'Input Last name',
  },
  address1: {
    index: 2,
    type: FieldType.Input,
    name: 'address1',
    text: 'Address 1',
    required: true,
    placeholder: 'Input address1',
  },
  address2: {
    index: 3,
    type: FieldType.Input,
    name: 'address2',
    text: 'Address 2',
    required: false,
    placeholder: 'Input address2',
  },
  city: {
    index: 4,
    type: FieldType.Input,
    name: 'city',
    text: 'City',
    required: true,
    placeholder: 'Input City',
  },
  postalCode: {
    index: 5,
    type: FieldType.Input,
    name: 'postalCode',
    text: 'Postal Code',
    required: true,
    placeholder: 'Input Zip Code',
    /*
    validations: [
      {
        type: ValidationType.IsNumber,
        message: 'Use correct US Zip code format',
      },
      {
        type: ValidationType.MaxLength,
        message: 'Use correct US Zip code format',
        value: 5,
      },
      {
        type: ValidationType.MinLength,
        message: 'Use correct US Zip code format',
        value: 5,
      }
    ],
    */
  },
  state: {
    index: 6,
    type: FieldType.StatePicker,
    name: 'state',
    text: 'State',
    required: true,
    placeholder: 'Please Select',
  },
  country: {
    index: 7,
    type: FieldType.CountryPicker,
    name: 'country',
    text: 'Country',
    required: true,
    placeholder: 'Select Country',
    defaultValue: 'US',
  },
  email: {
    index: 8,
    type: FieldType.Input,
    name: 'email',
    text: 'Email',
    required: true,
    placeholder: 'Input Email',
    notes:
      'Please enter your valid email address in the format - yourname@domainname.com',
    validations: [
      {
        type: ValidationType.IsEmail,
      },
    ],
  },
  phone: {
    index: 9,
    type: FieldType.PhoneInput,
    name: 'phone',
    text: 'Phone Number',
    required: true,
    placeholder: 'Input Phone number',
    notes: '',
    validations: [
      {
        type: ValidationType.IsPhone,
        message: 'Input correct (US) phone Number format',
      },
    ],
  },
}
