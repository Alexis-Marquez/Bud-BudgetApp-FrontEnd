import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import proxy from 'vite-plugin-proxy';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://192.168.1.82:8443',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
      },
    },
  },
  plugins: [react()],
});

