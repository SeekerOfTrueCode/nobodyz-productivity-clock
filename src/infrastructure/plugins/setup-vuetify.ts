import type { App } from 'vue'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function setupVuetify(app: App, _baseRoute: string) {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark'
    },
    icons: {
      defaultSet: 'mdi'
    }
    // components,
    // directives
  })

  app.use(vuetify)
}
