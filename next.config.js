const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['sv', 'en'],
    defaultLocale: 'sv',
    localeDetection: false
  }
}

module.exports = withNextIntl(nextConfig);
