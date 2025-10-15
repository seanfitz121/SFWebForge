/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
