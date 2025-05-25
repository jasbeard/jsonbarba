const { withContentlayer } = require('next-contentlayer');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.giphy.com', 'yzft9j8wzzlydetx.public.blob.vercel-storage.com'],
  },
  transpilePackages: ["@radix-ui/react-moving-focus"],
}

module.exports = withBundleAnalyzer(withContentlayer(nextConfig));
