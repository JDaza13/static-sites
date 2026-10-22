import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Sub-path the site is served from. CI sets BASE_PATH to
  // /<repo>/<folder>/ (see scripts/build-all.sh); "/" for local dev.
  base: process.env.BASE_PATH ?? "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
