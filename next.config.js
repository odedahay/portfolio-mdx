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
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    esmExternals: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '#site': './site',
    };
    return config;
  },
}

module.exports = nextConfig 