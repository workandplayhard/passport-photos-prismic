/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  reactStrictMode: true,
  trailingSlash: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    disableStaticImages: true,
    domains: [
      'passport-photos-ai.s3.us-east-1.amazonaws.com',
      'biometric-backend.s3.eu-central-1.amazonaws.com',
      'images.prismic.io',
    ],
  },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  },
  i18n: {
    locales: ['en-us', 'de-de', 'es-es', 'fr-fr'],
    defaultLocale: 'en-us',
    localeDetection: false,
    trailingSlash: true,
  },
}
