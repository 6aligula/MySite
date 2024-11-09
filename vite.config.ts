import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Esto hace que Vite escuche en todas las interfaces de red
    port: 5173      // Opcional: puedes especificar el puerto
  },
  base: '/',
  plugins: [react()],
})
