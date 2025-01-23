const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      {
        source: '/:path*/',
        destination: '/:path*',
        permanent: true,
      },
    ];
  }
}

module.exports = withNextIntl(nextConfig);
