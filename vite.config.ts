import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@styles': '/src/styles',
      '@helpers':'/src/helpers',
      '@hooks': '/src/hooks'
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
})
