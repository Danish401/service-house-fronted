import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPG"], // Include JPG files as assets
  server: {
    proxy: {
      "/api": {
        target: "https://house-service-9q6h.onrender.com",
        changeOrigin: true,
      },
    },
  },
});
