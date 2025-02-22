/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['allyshipglobal.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_BASE_PATH: '',
    NEXT_PUBLIC_SITE_URL: 'https://allyshipglobal.com',
  },
}

export default nextConfig
