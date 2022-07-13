import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/sub-app-vite/',
  server: {
    port: 3001,
    cors: true,
    origin: 'http://localhost:3001',
  },
})
