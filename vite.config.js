import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // aumenta a 1000 kB o lo que necesites
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Todos los paquetes externos en un chunk "vendor"
            return "vendor";
          }
          // Puedes hacer chunks específicos para módulos grandes
          if (id.includes("some-big-lib")) {
            return "some-big-lib";
          }
        },
      },
    },
  },
});
