// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Use library mode to create a standalone widget
    lib: {
      entry: "src/main.tsx",
      name: "ShadowButtonWidget",
      formats: ["umd"],
      fileName: () => "shadow-button-widget2.js",
    },
    rollupOptions: {
      // No need to externalize React since we're not using it in the final bundle
      output: {
        // Make sure the generated UMD bundle is immediately self-executing
        inlineDynamicImports: true,
      },
    },
    // Generate sourcemaps for debugging
    sourcemap: true,
    // Minify for production
    minify: "terser",
  },
});
