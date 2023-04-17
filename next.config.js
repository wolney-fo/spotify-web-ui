/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["i.scdn.co", "github.com"],
  },
};

module.exports = nextConfig;
