import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        sourcemap: false,
        minify: 'esbuild',
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    motion: ['framer-motion'],
                    icons: ['lucide-react']
                }
            }
        },
        // Prevent build from hanging
        reportCompressedSize: false,
        // Increase chunk size limit
        chunkSizeWarningLimit: 2000
    },
    server: {
        port: 3000,
        open: true
    },
    preview: {
        port: 4173
    },
    // Optimize dependencies
    optimizeDeps: {
        include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
    }
})
