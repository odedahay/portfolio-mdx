/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thrangra.sirv.com',
      },
      {
        protocol:'https',
        hostname: 'images.unsplash.com'
      }
    ],
  },
  devIndicators: false 
}

module.exports = nextConfig 