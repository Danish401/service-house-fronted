import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPG"],
  
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
    // Enable minification for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2, // Multiple passes for better compression
      },
      format: {
        comments: false, // Remove all comments
      },
    },
    
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
            if (id.includes('@reduxjs') || id.includes('react-redux')) {
              return 'vendor-redux';
            }
            if (id.includes('@mui')) {
              return 'vendor-mui';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (id.includes('axios') || id.includes('dayjs') || id.includes('socket.io')) {
              return 'vendor-utils';
            }
            // Large libraries get their own chunks
            if (id.includes('chart.js') || id.includes('react-chartjs')) {
              return 'vendor-charts';
            }
            if (id.includes('@syncfusion')) {
              return 'vendor-syncfusion';
            }
            // Other node_modules
            return 'vendor-other';
          }
        },
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
      'react-router-dom',
      '@reduxjs/toolkit',
      'react-redux',
      '@mui/material',
      '@mui/icons-material',
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
  },
  
  // CSS preprocessing
  css: {
    devSourcemap: true,
    modules: {
      localsConvention: 'camelCase',
    },
  },
  
  // Resolve aliases for cleaner imports
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@features': '/src/features',
      '@services': '/src/services',
    },
  },
  
  // Preview server config (for production preview)
  preview: {
    port: 4173,
    host: true,
  },
});
