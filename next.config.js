/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
        ignoreDuringBuilds: true,
       },
  reactStrictMode: true,
  
  swcMinify: true,
  env: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
  },
  images: {
    domains: ['image.tmdb.org'],
  },
};

module.exports = nextConfig;
