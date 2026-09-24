import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Relative base path makes GitHub Pages deployment reliable out of the box
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
