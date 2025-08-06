import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  assetsInclude: ['**/*.mp4'],
  
   build: {
    target: "esnext",
    minify: "esbuild", // fastest
    chunkSizeWarningLimit: 600, // helps identify large chunks
  },
})