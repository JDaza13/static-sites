import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Sub-path the site is served from. CI sets BASE_PATH to
  // /<repo>/<folder>/ (see scripts/build-all.sh); "/" for local dev.
  base: process.env.BASE_PATH ?? "/",
  build: {
    // Output folder; GitHub Actions uploads this directory.
    outDir: "dist",
    emptyOutDir: true,
  },
});
