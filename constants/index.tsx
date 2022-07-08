import { NavItemProps } from '@/components/layout/navItem'
import { ProcessStepProps } from '@/components/elements/processStep'
import {
  FieldType,
  FormField,
  ShippingType,
  ValidationType,
  ProductSku,
} from '@/generated/graphql'

export const TOKEN_EXPIRE_IN = 31556926 // seconds

export const PAGES = {
  home: '/',
  application: {
    index: '/application/',
    create: '/application/create/',
  },
  checkout: {
    index: '/checkout/',
    deliveryMethod: '/checkout/',
    shipping: '/checkout/shipping/',
    payment: '/checkout/payment/',
    review: '/checkout/review/',
    thankYou: '/checkout/thank-you/',
  },
  cart: '/cart/',
  photo: {
    index: '/photo/',
    editPhoto: '/photo/edit-photo/',
    takePhoto: '/photo/take-photo/',
    takeNewPhoto: '/photo/take-new-photo/',
    processPhoto: '/photo/process-photo/',
  },
  contactUs: '/contact-us/',
  about: '/about/',
  terms: '/terms/',
  shippingPolicy: '/shipping-policy/',
  upSell: '/up-sell/',
  blogs: '/blogs/',
}

export const SEO = {
  home: {
    title: 'PassportPhotos - Home Page',
    description:
      'Take Your Own Passport Photo From Anywhere - Use Your Cellphone and Get Instant Compliance and Verification',
    keywords:
      'ake passport photo at home, print your own passport photo, cellphone passport photos, passport photos online',
  },
  selectType: {
    title: 'PassportPhotos - Select type',
    description:
      'Taking your passport photo on your own or having someone take it for you',
    keywords:
      'diy passport photo, passport photos online, how to take a passport photo at home',
  },
  takePhoto: {
    title: 'PassportPhotos - Take a photo',
    description: `It's Your Shot, On Your Own Time, and From Anywhere With your cellphone or upload an existing photo.`,
    keywords:
      'digital passport photo, cellphone passport photo, take a passport photo',
  },
  processPhoto: {
    title: 'PassportPhotos - Process Photo',
    description:
      'Biometrically Verified Passport Photos From the Comfort of Your Home. Let our AI technology do the work',
    keywords:
      'Compliant passport photos, verified passport photos, biometrically approved passport photos.',
  },
  editPhoto: {
    title: 'PassportPhotos - Edit Photo',
    description:
      'Biometrically Verified Passport Photos From the Comfort of Your Home. Let our AI technology do the work',
    keywords:
      'Compliant passport photos, verified passport photos, biometrically approved passport photos.',
  },
  passportApplication: {
    title: 'PassportPhotos - Passport Application Page',
    description: `Add a passport application to your passport photo purchase. 
                  Convenient, easy and secure passport application completion.`,
    keywords:
      'Online passport applications, digital passport application form, passport application forms',
  },
  blogs: {
    title: 'PassportPhotos - Blogs Page',
    description: ``,
    keywords: '',
  },
  blog: {
    title: 'PassportPhotos - Blog Page',
    description: ``,
    keywords: '',
  },
  checkout: {
    title: 'PassportPhotos - Checkout',
    description: '',
    keywords: '',
  },
  contactUs: {
    title: 'PassportPhotos - Contact Us',
    description:
      'Take Your Own Passport Photo From Anywhere - Use Your Cellphone and Get Instant Compliance and Verification',
    keywords:
      'take passport photo at home, print your own passport photo, cellphone passport photos, passport photos online',
  },
  about: {
    title: 'PassportPhotos - About',
    description: '',
    keywords: '',
  },
  faq: {
    title: 'PassportPhotos - FAQ',
    description: '',
    keywords: '',
  },
  shippingPolicy: {
    title: 'PassportPhotos - Shipping Policy',
    description: '',
    keywords: '',
  },
  terms: {
    title: 'PassportPhotos - Terms of Use',
    description: '',
    keywords: '',
  },
  shoppingCart: {
    title: 'PassportPhotos - Shopping cart',
    description: '',
    keywords: '',
  },
  upSell: {
    title: 'PassportPhotos - UpSell',
    description: '',
    keywords: '',
  },
  thankYou: {
    title: 'PassportPhotos - Thank you',
    description: '',
    keywords: '',
  },
}

export const TOP_MENUS: NavItemProps[] = [
  {
    title: 'Passport Photo',
    link: PAGES.photo.index,
    items: [],
  },
  {
    title: 'FAQ',
    link: `${PAGES.home}#faq`,
    items: [],
  },
  {
    title: 'About',
    link: PAGES.about,
    items: [],
  },
  {
    title: 'Contact Us',
    link: PAGES.contactUs,
    items: [],
  },
]

export const PHOTO_FORM = 'Photo'

export const CHECKOUT_STEPS: ProcessStepProps = {
  title: 'New passport application',
  completeStep: 0,
  step: 1,
  steps: [
    {
      name: 'Delivery Method',
      step: 1,
      link: PAGES.checkout.index,
    },
    {
      name: 'Shipping Information',
      step: 2,
      link: PAGES.checkout.shipping,
    },
    {
      name: 'Payment Information',
      step: 3,
      link: PAGES.checkout.payment,
    },
    {
      name: 'Review and Pay',
      step: 4,
      link: PAGES.checkout.review,
    },
  ],
}

export const PHOTO_STEP = {
  step: 1,
  steps: [
    {
      name: 'Take Photo',
      step: 1,
      link: PAGES.photo.takePhoto,
    },
    {
      name: 'Biometric Verification',
      step: 2,
      link: PAGES.photo.takePhoto,
    },
    {
      name: 'Checkout & Delivery',
      step: 3,
      link: PAGES.photo.processPhoto,
    },
  ],
}

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
        : 'Standard 3-5 business days',
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

export const CHECKLIST = [
  'Head Pose',
  'Open Eyes',
  'Red Eyes',
  'Glasses',
  'Hat',
  'Sharpness',
  'Resolution',
  'Expression',
  'Diagonal Face',
  'Eyes Open',
  'Pupils',
]

export const US_PASSPORT_IMAGES = [
  {
    name: 'Visa',
    image: 'us-visa.png',
  },
  {
    name: 'USCIS Forms Photo',
    image: 'us-uscis.png',
  },
  {
    name: 'Green Card (Permanent Resident)',
    image: 'us-green-card.png',
  },
  {
    name: 'NY Gun License',
    image: 'us-gun-license.png',
  },
]

export const UK_PASSPORT_IMAGES = [
  {
    name: 'Passport',
    image: 'uk-passport-photo.png',
  },
  {
    name: 'Passport (ONLINE)',
    image: 'uk-passport-photo.png',
  },
  {
    name: 'Driving Licence',
    image: 'uk-driving-license.png',
  },
  {
    name: 'ID / residence card',
    image: 'uk-res-card.png',
  },
  {
    name: 'Visa',
    image: 'uk-visa.jpeg',
  },
]

export const PRIVATE_ROUTES = ['/photo/edit-photo']

export const ExtraPath = [
  'order-passport-photos-online',
  'take-your-own-passport-photo',
  'take-your-passport-photo-with-your-phone',
  'take-passport-photos-at-home',
  'print-passport-photos-at-home',
  'passport-photo-app',
]

export * from './countries'
export * from './documents'
