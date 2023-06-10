import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs'
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      data: path.resolve(__dirname, './src/data'),
      hooks: path.resolve(__dirname, './src/hooks'),
      styles: path.resolve(__dirname, './src/styles')
    }
  }
})
