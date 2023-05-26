# UI Kit

## Installing

Install package for needed workspace:

```
npm i @packages/ui-kit -w <workspace-name>
```

## Configuration

### Connect fonts

> There are problems due to which it is impossible to move fonts into a separate package in a monorepository.

Connect fonts, examples can be found in [@apps/admin](/apps/admin/index.html) (CSR Vite) and [@apps/client](/apps/client/src/pages/_app.tsx) (Next.js).

The main thing is that the application has a global variable set:

```css
/* apps/<app-name>/src/app/styles/_fonts.scss */

:root {
  --montserrat-font: 'Montserrat';
}
```

In Next.js the variable is set in `_app.tsx` like this:

```jsx
<style global jsx>{`
  :root {
    --montserrat-font: ${montserratFont.style.fontFamily};
  }
`}</style>
```

### Connect global styles in your app like

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
