// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: '../server/public',
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/books': {
        target: 'http://localhost:3001'
      }
    }
  }
})
