const { withContentlayer } = require("next-contentlayer2"); // weird parsing error — could be code editor issue, typescript compiles well when running type-check.

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    imgOptTimeoutInSeconds: 60,
    imgOptConcurrency: 1,
  },
  images: {
    qualities: [75, 82],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.giphy.com",
      },
      {
        protocol: "https",
        hostname: "yzft9j8wzzlydetx.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "1fjnp8gfmpn2zccc.public.blob.vercel-storage.com",
      },
    ],
  },
  transpilePackages: ["@radix-ui/react-moving-focus"],
};

module.exports = withBundleAnalyzer(withContentlayer(nextConfig));
