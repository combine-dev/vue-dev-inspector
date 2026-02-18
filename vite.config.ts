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
        vite: resolve(__dirname, 'src/vite/plugin.ts'),
        nuxt: resolve(__dirname, 'src/nuxt/module.ts'),
        plugin: resolve(__dirname, 'src/nuxt/plugin.ts'),
        unplugin: resolve(__dirname, 'src/unplugin/index.ts'),
        react: resolve(__dirname, 'src/react/index.ts'),
        next: resolve(__dirname, 'src/next/plugin.ts'),
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        const ext = format === 'es' ? 'js' : 'cjs'
        return `${entryName}.${ext}`
      },
    },
    rollupOptions: {
      external: [
        'vue',
        'pinia',
        'vue-router',
        '#imports',
        '#app',
        '@nuxt/kit',
        'fs',
        'path',
        'unplugin',
        'react',
        'react-dom',
        'react/jsx-runtime',
      ],
      output: {
        globals: {
          vue: 'Vue',
          pinia: 'Pinia',
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    cssCodeSplit: false,
  },
})
