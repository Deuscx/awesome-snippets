import { defineConfig } from 'jsrepo'
import { distributed } from 'jsrepo/outputs'

export default defineConfig({
  registry: {
    name: '@example/vue',
    version: 'package',
    outputs: [
      distributed({ dir: './public/r', format: true }),
    ],
    items: [
      {
        name: 'TheCounter',
        type: 'ui',
        files: [
          {
            path: 'src/components/TheCounter.vue',
          },
        ],
      },
    ],
  },
})
