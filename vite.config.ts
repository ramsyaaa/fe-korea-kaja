import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import * as path from "path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@fonts": path.resolve(__dirname, "./src/assets/fonts"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  assetsInclude: ["**/*.eot", "**/*.ttf", "**/*.woff", "**/*.woff2"],
  build: {
    assetsInlineLimit: 0,
  },
});
