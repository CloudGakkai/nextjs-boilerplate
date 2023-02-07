/** @type {import('next').NextConfig} */

const BASE_API_URL = process.env.ENABLE_MOCK_API
  ? "https://localhost:3000/api"
  : process.env.BASE_API_URL || "https://localhost:3000/api";

const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === "production",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: BASE_API_URL + "/:path*",
    },
  ],
};

module.exports = nextConfig;
