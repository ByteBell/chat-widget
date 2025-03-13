import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "ShadowButtonWidget",
      formats: ["umd"],
      fileName: () => "shadow-button-widget11.js",
    },
    minify: "terser",
  },
});
