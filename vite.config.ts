import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://oswaldodm.github.io/fobs-demo/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },  
})
