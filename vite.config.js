import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // set to '/<repo-name>/' if deploying to GitHub Pages under a project path
  base: '/',
})
