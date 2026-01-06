import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPG"],
  
  // Resolve to a single React instance everywhere
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@features': '/src/features',
      '@services': '/src/services',
    },
    dedupe: ['react', 'react-dom'],
  },
  
  // Development server config
  server: {
    host: true,
    port: 5173,
    open: true,
    proxy: {
      "/api": {
        target: "https://house-service-9q6h.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  
  // Build optimizations
  build: {
    // Use esbuild with conservative minification settings
    minify: 'esbuild',
    // esbuild minification options
    esbuild: {
      legalComments: 'none',
      minifyIdentifiers: true,
      minifySyntax: true,
      minifyWhitespace: true,
      // Keep function names for better error messages
      keepNames: false,
    },
    
    // Let Rollup decide chunking to avoid fragile manual ordering
    rollupOptions: {
      output: {
        // Asset file naming
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    
    // Source map for debugging (disable in production for smaller bundles)
    sourcemap: false,
    
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    
    // Enable CSS code splitting
    cssCodeSplit: true,
    
    // Target modern browsers for smaller bundle
    target: 'es2020',
    
    // Enable compression
    reportCompressedSize: true,
    
    // Optimize asset inlining threshold (inline assets smaller than 4kb)
    assetsInlineLimit: 4096,
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'react-router-dom',
      '@reduxjs/toolkit',
      'react-redux',
      '@mui/material',
      '@mui/icons-material',
      '@emotion/react',
      '@emotion/styled',
      'framer-motion',
      'axios',
    ],
    // Exclude heavy dependencies that should be lazy loaded
    exclude: [
      '@syncfusion/ej2-react-richtexteditor',
      '@syncfusion/ej2-react-spreadsheet',
      'chart.js',
      'react-chartjs-2',
    ],
    // Force optimization of linked packages
    force: true,
    esbuildOptions: {
      jsx: 'automatic',
    },
  },
  
  // CSS preprocessing
  css: {
    devSourcemap: true,
    modules: {
      localsConvention: 'camelCase',
    },
  },
  
  // Preview server config (for production preview)
  preview: {
    port: 4173,
    host: true,
  },
});
