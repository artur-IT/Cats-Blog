import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy:
      process.env.NODE_ENV === "development"
        ? {
            "/api": "http://localhost:3000",
          }
        : undefined,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  plugins: [react()],
  base: "/",
});
