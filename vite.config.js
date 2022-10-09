import { defineConfig } from 'vite'
import { resolve } from 'path'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [

    uni({
      vueOptions: {
        reactivityTransform: true
      }
    }),

    AutoImport({
      imports: [
        'vue',
        'pinia',
        'uni-app'
      ],
      dts: true,
    }),

    Components({
      dts: true,
    }),

    Unocss()
  ],
})
