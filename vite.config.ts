import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        nuxt: resolve(__dirname, 'src/nuxt/module.ts'),
        plugin: resolve(__dirname, 'src/nuxt/plugin.ts'),
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        const ext = format === 'es' ? 'js' : 'cjs'
        return `${entryName}.${ext}`
      },
    },
    rollupOptions: {
      external: ['vue', 'pinia', 'vue-router', '#imports', '#app', '@nuxt/kit'],
      output: {
        globals: {
          vue: 'Vue',
          pinia: 'Pinia',
        },
      },
    },
    cssCodeSplit: false,
  },
})
