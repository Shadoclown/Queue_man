import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Queue_man/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
})
