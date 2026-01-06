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
    // Use esbuild for faster and more reliable minification
    minify: 'esbuild',
    // Alternative: Use terser with safer options if needed
    // minify: 'terser',
    // terserOptions: {
    //   compress: {
    //     drop_console: true,
    //     drop_debugger: true,
    //     pure_funcs: ['console.log', 'console.info', 'console.debug'],
    //     passes: 1, // Reduced passes to avoid hoisting issues
    //     hoist_funs: false, // Disable function hoisting
    //     hoist_vars: false, // Disable variable hoisting
    //   },
    //   format: {
    //     comments: false,
    //   },
    // },
    
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks - simpler strategy to avoid circular dependencies
          if (id.includes('node_modules')) {
            // Keep React and React-DOM together to avoid initialization issues
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
            if (id.includes('@reduxjs') || id.includes('react-redux')) {
              return 'vendor-redux';
            }
            // Keep MUI and Emotion together (they're tightly coupled)
            if (id.includes('@mui') || id.includes('@emotion')) {
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
