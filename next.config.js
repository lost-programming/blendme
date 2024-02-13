/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  basePath: "/blendme/",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
