/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'default',
    path: '/_next/image',
    
  },
  future: { webpack5: true }
}


module.exports = nextConfig
