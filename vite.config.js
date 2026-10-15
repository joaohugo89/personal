import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Caminhos relativos: funciona em domínio próprio, subpasta ou GitHub Pages.
  base: './',
  server: {
    port: 4173,
  },
})
