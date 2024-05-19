import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import globalThisPolyfill from "globalthis";
import { resolve } from "path";

globalThisPolyfill();

export default defineConfig({
  plugins: [react()],
  define: {
    global: "globalThis",
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false, // se o seu localhost está usando um certificado SSL autoassinado
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
