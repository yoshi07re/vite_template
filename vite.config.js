import { resolve } from "node:path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

const pageData = {
  "/index.html": {
    isHome: true,
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    host: true,
    port: 8888,
  },
  base: "./",
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    cssCodeSplit: false,
    minify: false,
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].js",
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
  input: {
    index: resolve(__dirname, "./src/index.html"),
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "./src/components"),
      context(pagePath) {
        return pageData[pagePath];
      },
    }),
  ],
});
