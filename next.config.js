/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  addons: ['@chakra-ui/storybook-addon'],
  features: {
    emotionAlias: false,
  },
}

module.exports = nextConfig
