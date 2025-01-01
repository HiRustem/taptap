import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import vercel from "vite-plugin-vercel";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths(), vercel()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  base: "/",
});
