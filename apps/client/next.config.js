/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@packages/ui-kit'],
  sassOptions: {
    prependData: "@import '@packages/ui-kit/src/styles/index.scss';",
  },
};

module.exports = nextConfig;
