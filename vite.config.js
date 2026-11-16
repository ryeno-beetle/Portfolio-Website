import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio-Website/",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          var info = assetInfo.name.split(".");
          var extType = info[info.length - 1];
          if (/ttf/.test(extType)) {
            extType = "fonts";
          }
          return `static/${extType}/[name]-[hash][extname]`;
        },
      },
    },
  }
})
