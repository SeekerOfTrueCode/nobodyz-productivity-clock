import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify as _createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

export function createVuetify() {
  const vuetify = _createVuetify({
    theme: {
      defaultTheme: 'dark'
    },
    icons: {
      defaultSet: 'mdi'
    }
    // components,
    // directives
  })

  return vuetify
}
