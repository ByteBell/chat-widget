import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "ShadowButtonWidget",
      formats: ["umd"],
      fileName: () => "shadow-button-widget15.js",
    },
    minify: "terser",
    rollupOptions: {
      // Make sure to externalize dependencies you don't want to bundle
      external: ["react", "react-dom"],
      output: {
        // Global variables to use in UMD build for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  define: {
    // This explicitly replaces 'process.env.NODE_ENV' with 'production'
    "process.env.NODE_ENV": JSON.stringify("production"),
    // If you need other env variables:
    // 'process.env': JSON.stringify({})
  },
});
