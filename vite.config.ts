import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  assetsInclude: ["**/*.docx", "**/*.doc", "**/*.ppt", "**/*.pptx", "**/*.xlsx"],
  optimizeDeps: {
    include: ["**/*.{js,jsx,ts,tsx}", "**/*.docx", "**/*.doc", "**/*.ppt", "**/*.pptx", "**/*.xlsx"],
  },
});
