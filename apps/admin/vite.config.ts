import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr({ include: /\.svg$/, exportAsDefault: true }), tsconfigPaths(), react()],
  server: {
    port: 3001,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@packages/ui-kit/src/styles/index.scss';",
      },
    },
  },
});
