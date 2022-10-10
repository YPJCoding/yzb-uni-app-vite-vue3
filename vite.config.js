import { defineConfig } from 'vite'
import { resolve } from 'path'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vwt from "weapp-tailwindcss-webpack-plugin/vite";

const isH5 = process.env.UNI_PLATFORM === "h5";
const WeappTailwindcssDisabled = isH5

const postcssPlugins = [require("autoprefixer")(), require("tailwindcss")()];

if (!WeappTailwindcssDisabled) {
  postcssPlugins.push(
    require("postcss-rem-to-responsive-pixel")({
      rootValue: 32,
      propList: ["*"],
      transformUnit: "rpx",
    })
  );
}

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
        'uni-app',
        {
          '@/store/modules/user': ['useUserStore']
        }
      ],
      dts: true,
    }),

    Components({
      dts: true,
    }),

    WeappTailwindcssDisabled ? undefined : vwt()
  ],
  css: {
    postcss: {
      plugins: postcssPlugins,
    },
  },
})
