import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      federation({
        name: "root-app",
        filename: "root-app-entry.js",
        shared: ["react", "react-dom", "react-router-dom", "zustand"],
        remotes: {
          "product-mfe": "http://localhost:3002/product-mfe/assets/product-mfe-entry.js",
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
      port: 3000,
    },
    preview: {
      port: 3000,
    }
  };
});
