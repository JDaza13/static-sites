import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/transportadora/",
  build: {
    // Output folder; GitHub Actions uploads this directory.
    outDir: "dist",
    emptyOutDir: true,
  },
});
