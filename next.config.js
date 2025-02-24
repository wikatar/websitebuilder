const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    _next_intl_trailing_slash: 'never'
  }
}

module.exports = withNextIntl(nextConfig);
