/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.NEXT_PUBLIC_ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  images: {
    domains: ["devil.karakhoobe.ir"],
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  swcMinify: true,
  env: {
    HOSTNAME: process.env.NEXT_PUBLIC_HOSTNAME,
    PORT: process.env.NEXT_PUBLIC_PORT,
    HOST: process.env.NEXT_PUBLIC_HOST,
    APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
    APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION,
    APP_SITE_URL: process.env.NEXT_PUBLIC_APP_SITE_URL,
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    MAP_TOKEN: process.env.NEXT_PUBLIC_MAP_TOKEN,
  },
}));

