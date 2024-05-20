import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      filename: "product-mfe-entry.js",
      name: "product-mfe",
      shared: ["react", "react-dom", "zustand"],
      exposes: {
        "./App": "./src/App.tsx",
      },
      remotes: {
        "cart-mfe": "http://localhost:3001/cart-mfe/assets/cart-mfe-entry.js",
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3002,
  },
  preview: {
    port: 3002,
  },
  base: "/product-mfe/"
});
