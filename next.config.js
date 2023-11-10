/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  basePath: "/blendme",
  images: {
    formats: ["image/webp"],
  },
  output: "standalone",
};

module.exports = nextConfig;
