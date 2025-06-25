import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
