/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["yt3.ggpht.com", "www.nationalreview.com"],
  },
};

module.exports = nextConfig;
