import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GH_PAGES_BASE_URL,
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
})
