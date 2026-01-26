/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  // Enable static HTML export so we can host on S3
  output: 'export',
};

module.exports = nextConfig;
