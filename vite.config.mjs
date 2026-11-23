import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? '/rock-paper-scissors-game/' : '/',
  plugins: [react()],
  build: { outDir: 'build' }
}))
