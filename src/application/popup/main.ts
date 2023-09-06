import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import { setupRouter } from '@/infrastructure/plugins/setup-router'
import { setupStore } from '@/infrastructure/plugins/setup-store'
import { setupI18n } from '@/infrastructure/plugins/setup-i18n'
import { setupLoading } from '@/infrastructure/plugins/setup-loading'
import { delay } from '@/utils/delay'

const app = createApp(App)
setupRouter(app, 'popup')
setupStore(app, 'popup')
setupI18n(app, 'popup')
setupLoading(app, async () => {
  // FIXME: 
  // Instead of this useless delay here put your async loading logic (for example loading logged in user from the localStorage with async fn)
  // or you could call api here to get something before app loads
  await delay(2000)
})
app.mount('#app')