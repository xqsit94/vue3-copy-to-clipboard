import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // eslint-disable-next-line no-undef
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'vue3-copy-to-clipboard',
      fileName: 'vue3-copy-to-clipboard',
    },
    rollupOptions: {
      external: ['copy-to-clipboard', 'vue'],
      output: {
        globals: {
          'copy-to-clipboard': 'copy',
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()],
})
