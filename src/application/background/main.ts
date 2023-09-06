import App from '@/application/background/app.vue'
import { setupStore } from '@/infrastructure/plugins/setup-store'

export function createRenderlessAppAndStore() {
  const app = createApp(App)
  setupStore(app, 'content-script')
}