/** @type {import('next').NextConfig} */

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
      destination: process.env.BASE_API_URL + "/:path*",
    },
  ],
};

module.exports = nextConfig;
