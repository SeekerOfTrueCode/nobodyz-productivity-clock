import { createApp } from 'vue'
// import './style.css' // we have to apply it inside the content-script's shadow element instead
import App from './app.vue'
import { setupStore } from '@/infrastructure/plugins/setup-store'
import { setupI18n } from '@/infrastructure/plugins/setup-i18n'
import { setupLoading } from '@/infrastructure/plugins/setup-loading'
import { setupVuetify } from '@/infrastructure/plugins/setup-vuetify'
import { delay } from '@/utils/delay'

export function mountApp(rootContainer: string | Element) {
  const name = 'content-script'
  const app = createApp(App)
  setupStore(app, name)
  setupI18n(app, name)
  setupVuetify(app, name)
  setupLoading(app, async () => {
    // FIXME: 
    // Instead of this useless delay here put your async loading logic (for example loading logged in user from the localStorage with async fn)
    // or you could call api here to get something before app loads
    await delay(2000)
  })
  app.mount(rootContainer)
}