/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos"],
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
