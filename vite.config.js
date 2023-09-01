import { defineConfig } from "vite";
import { resolve } from "path";


const rootDir = resolve(__dirname);
const srcDir = resolve(rootDir, "src");
const assetsDir = resolve(srcDir, "assets");
const outDir = resolve(rootDir, "dist");
const publicDir = resolve(rootDir, "public");

export default defineConfig({
  build: {
    outDir: "chrome_ext",
    rollupOptions: {
      input: {
        content: resolve(srcDir, "content", "index.ts"),
        background: resolve(srcDir, "background", "index.ts"),
        popup: resolve(srcDir, "popup", "index.html"),
      },
      output: {
        entryFileNames: "src/[name]/index.js",
        chunkFileNames: "assets/[name].js",
      },
    },
  },
});
