import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, "./src"),
      '@pages': path.resolve(import.meta.dirname, './src/pages'),
      '@components': path.resolve(import.meta.dirname, './src/components'),
      '@constants': path.resolve(import.meta.dirname, './src/constants'),
      '@assets': path.resolve(import.meta.dirname, './src/assets'),
      '@interfaces': path.resolve(import.meta.dirname, './src/interfaces'),
    }
  }
})
