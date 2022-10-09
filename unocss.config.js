import presetWeapp from 'unocss-preset-weapp'
import { defineConfig, presetAttributify, transformerDirectives, transformerVariantGroup } from 'unocss'
import { transformerClass } from 'unocss-preset-weapp/transformer'
import { presetApplet, presetRemToRpx, transformerApplet, transformerAttributify } from 'unocss-applet'
import presetIcons from '@unocss/preset-icons'

// UniApp
const isH5 = process.env.UNI_PLATFORM === 'h5'

export default defineConfig({
  presets: [
    presetWeapp(),
    presetApplet({ enable: !isH5 }),
    presetAttributify(),
    presetRemToRpx({ enable: !isH5 }),
    presetIcons()
  ],
  shortcuts: [
    {
      'center': 'flex justify-center items-center',
    },
  ],

  transformers: [
    transformerClass(),
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributify(),
    transformerApplet(),
  ]
})
