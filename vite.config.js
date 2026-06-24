import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/studio': {
        target: 'http://localhost:3333',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/studio/, ''),
      },
    },
  },
});
