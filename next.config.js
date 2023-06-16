/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['storage.googleapis.com', 'coinpayments.net'],
    minimumCacheTTL: 1500000,
  },
}

module.exports = nextConfig
