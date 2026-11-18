import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    strictPort: true, // Sprečava Vite da automatski pređe na 3001 ako je 3000 zauzet
    watch: {
      usePolling: true, // Neophodno za hot-reload unutar Docker-a na Windowsu/Macu
    },
    proxy: {
      "/api": "http://web:3001", // Koristi se ime Docker servisa 'web' umesto localhost
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
