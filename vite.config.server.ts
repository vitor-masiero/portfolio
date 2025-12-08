import { defineConfig } from "vite";
import path from "path";

// Server build configuration
export default defineConfig({
  build: {
    lib: {
      entry: {
        serverless: path.resolve(__dirname, "server/serverless.ts"),
        "node-build": path.resolve(__dirname, "server/node-build.ts"),
      },
      name: "server",
      formats: ["es"],
    },
    outDir: "server-dist",
    target: "node22",
    ssr: true,
    rollupOptions: {
      external: [
        // Node.js built-ins
        "fs",
        "path",
        "url",
        "http",
        "https",
        "os",
        "crypto",
        "stream",
        "util",
        "events",
        "buffer",
        "querystring",
        "child_process",
        "net",
        "tls",
        "zlib",
        "dns",
        // External dependencies that should not be bundled
        "express",
        "cors",
        "dotenv",
        "nodemailer",
        "openai",
        "serverless-http",
      ],
      output: {
        format: "es",
        entryFileNames: "[name].mjs",
      },
    },
    minify: false,
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
