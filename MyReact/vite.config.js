import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // This ensures that all routes fall back to index.html for client-side routing.
    historyApiFallback: true,
  },
})
