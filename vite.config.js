import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        react({
            // Optimize React for production
            babel: {
                plugins: [
                    // Remove console.log in production
                    process.env.NODE_ENV === 'production' && ['babel-plugin-transform-remove-console', { exclude: ['error', 'warn'] }]
                ].filter(Boolean)
            }
        })
    ],
    build: {
        outDir: 'dist',
        sourcemap: false,
        minify: 'esbuild',
        target: 'esnext',
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks: {
                    // Core React chunks
                    vendor: ['react', 'react-dom'],
                    // Animation library
                    motion: ['framer-motion'],
                    // Icons library
                    icons: ['lucide-react'],
                    // Separate chunk for large components
                    components: [
                        './src/components/Hero.jsx',
                        './src/components/Preloader.jsx'
                    ]
                },
                // Optimize chunk naming
                chunkFileNames: 'assets/[name]-[hash].js',
                entryFileNames: 'assets/[name]-[hash].js',
                assetFileNames: 'assets/[name]-[hash].[ext]'
            }
        },
        // Performance optimizations
        reportCompressedSize: false,
        cssCodeSplit: true,
        // Enable tree shaking
        treeshake: true,
        // Optimize for modern browsers
        cssMinify: 'esbuild'
    },
    server: {
        port: 3000,
        open: true,
        // Enable HMR optimizations
        hmr: {
            overlay: false
        }
    },
    preview: {
        port: 4173
    },
    // Optimize dependencies
    optimizeDeps: {
        include: [
            'react',
            'react-dom',
            'framer-motion',
            'lucide-react'
        ],
        // Force pre-bundling of these dependencies
        force: true
    },
    // CSS optimizations
    css: {
        devSourcemap: false,
        preprocessorOptions: {
            // Optimize CSS processing
        }
    },
    // Enable esbuild optimizations
    esbuild: {
        // Remove debugger statements in production
        drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
        // Optimize for modern browsers
        target: 'esnext'
    }
})
