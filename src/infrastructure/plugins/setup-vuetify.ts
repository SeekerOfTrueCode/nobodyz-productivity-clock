import type { App } from 'vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function setupVuetify(app: App, _baseRoute: string) {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark'
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    }
    // components,
    // directives
  })

  app.use(vuetify)
}
