import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // react(): permite usar JSX y recarga instantánea.
  // tailwindcss(): genera solo las clases de Tailwind que usas en tu código.
  plugins: [react(), tailwindcss()],
})
