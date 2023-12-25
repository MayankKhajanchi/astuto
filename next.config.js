/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    reactRefresh: false,
  },
};

module.exports = nextConfig;
