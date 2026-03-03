import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        unused: true,
        dead_code: true,
        passes: 3,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Séparer les dépendances principales
          if (id.includes("node_modules/react")) {
            return "react-vendor";
          }
          if (id.includes("node_modules")) {
            return "vendor";
          }
          // Code du projet - lazy load les sections
          if (id.includes("sections/projects-section")) {
            return "projects-section";
          }
          if (id.includes("sections/career-section")) {
            return "career-section";
          }
          if (id.includes("sections/testimonials-section")) {
            return "testimonials-section";
          }
          if (id.includes("sections/contact-section")) {
            return "contact-section";
          }
          if (id.includes("features/carousel")) {
            return "carousel";
          }
          if (id.includes("features/project-modal")) {
            return "project-modal";
          }
        },
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
    reportCompressedSize: false,
    chunkSizeWarningLimit: 500,
    cssCodeSplit: true,
    cssMinify: true,
    commonjsOptions: {
      sourceMap: false,
    },
  },
});
