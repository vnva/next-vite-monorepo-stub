import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
