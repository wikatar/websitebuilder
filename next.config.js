const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['balthazarproject.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable static exports for template usage
  output: 'standalone',
  // Configurable base path for template deployment
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

module.exports = withNextIntl(nextConfig);
