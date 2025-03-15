import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "ShadowButtonWidget",
      formats: ["es"],
      fileName: () => "shadow-button-widget18.js",
    },
    minify: "terser",
  },
});
