/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_HOST: process.env.API_HOST
      },
      distDir: 'out',
      output: 'export'
}

module.exports = nextConfig
