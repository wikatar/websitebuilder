const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['sv', 'en'],
    defaultLocale: 'sv',
    localeDetection: false
  },
  output: 'standalone',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || ''
}

module.exports = withNextIntl(nextConfig);
