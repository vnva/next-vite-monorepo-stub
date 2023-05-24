/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@packages/ui-kit'],
  sassOptions: {
    prependData: `@import "@packages/assets/src/styles/index.scss";`,
  },
};

module.exports = nextConfig;
