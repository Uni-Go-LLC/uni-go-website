import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  base: "/",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          return assetInfo.name || "[name].[ext]";
        },
        chunkFileNames: "[name].js",
        entryFileNames: "[name].js",
      },
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
