import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: change `base` to match your GitHub repository name,
// e.g. if your repo is github.com/usuario/portfolio
// then base should be '/portfolio/'.
// If you deploy to a custom domain or to a user/organization page
// (usuario.github.io), set base to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
