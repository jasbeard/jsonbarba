const { withContentlayer } = require('next-contentlayer2'); // weird parsing error — could be code editor issue, typescript compiles well when running type-check.

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.giphy.com',
      },
      {
        protocol: 'https',
        hostname: 'yzft9j8wzzlydetx.public.blob.vercel-storage.com'
      }
    ],
  },
  transpilePackages: ["@radix-ui/react-moving-focus"],
}

module.exports = withBundleAnalyzer(withContentlayer(nextConfig));
