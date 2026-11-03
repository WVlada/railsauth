import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true, // Sprečava Vite da automatski pređe na 3001 ako je 3000 zauzet
    watch: {
      usePolling: true // Neophodno za hot-reload unutar Docker-a na Windowsu/Macu
    }
  },
})
