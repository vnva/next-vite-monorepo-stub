# UI Kit

## Installing

Install package for needed workspace:

```
npm i @packages/ui-kit -w <workspace-name>
```

## Usage

Connect global styles in your app like:

```
@import '@packages/ui-kit/src/styles/index.scss';
```

For Vite:

```ts
// vite.config.ts

export default defineConfig({
  ...,
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@packages/ui-kit/src/styles/index.scss';",
      },
    },
  },
});
```

For Next:

```ts
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...,
  transpilePackages: ['@packages/ui-kit'],
  sassOptions: {
    prependData: "@import '@packages/ui-kit/src/styles/index.scss';",
  },
};

module.exports = nextConfig;
```

## Code generation

Generate component:

```
npm run generate:component -w @packages/ui-kit
```
