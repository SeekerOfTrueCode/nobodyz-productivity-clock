import type { App } from 'vue'
import { createVuetify } from './setup-vuetify/create-vuetify'


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function setupVuetify(app: App, _baseRoute: string) {
  app.use(createVuetify())
}
