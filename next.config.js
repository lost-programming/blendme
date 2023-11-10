/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  basePath: "/blendme",
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
