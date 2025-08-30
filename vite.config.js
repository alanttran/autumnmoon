import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Markdown from 'unplugin-vue-markdown/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueDevTools(),
    Markdown({
      headEnabled: false, // Disable head management
      frontmatter: true,
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      wrapperComponent: 'div',
      wrapperClasses: 'mission-content',
    }),
  ],
  base: '/autumnmoon/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
