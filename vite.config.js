import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Coffee-Cafe-React/",
  plugins: [react()],
  build: {
    outDir: 'build'  // Asegúrate de que la salida se genere en el directorio 'build'
  }
})
