/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  reactStrictMode: true,
}

export default nextConfig
