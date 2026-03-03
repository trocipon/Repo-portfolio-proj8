import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "dist/stats.html",
      open: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
    },
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
          if (id.includes("features/tech-carousel")) {
            return "tech-carousel";
          }
          if (id.includes("features/contact-form")) {
            return "contact-form";
          }
        },
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
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
