import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Explicit public directory configuration
  publicDir: "public",
  // Favicon explicitly configured
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
  // Ensure assets are served correctly
  server: {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  },
});
