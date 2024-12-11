/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_HOST: process.env.API_HOST
      },
      distDir: 'build'
}

module.exports = nextConfig
