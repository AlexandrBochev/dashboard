/** @type {import('next').NextConfig} */
const nextConfig = {
  test: /\.svg$/,
  use: ['@svgr/webpack'],
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
