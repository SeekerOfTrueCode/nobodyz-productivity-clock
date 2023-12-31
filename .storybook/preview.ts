import type { Preview } from "@storybook/vue3";
import { setup } from '@storybook/vue3';
import { setupStore } from '@/infrastructure/plugins/setup-store'
import { setupI18n } from '@/infrastructure/plugins/setup-i18n'
import { setupVuetify } from "@/infrastructure/plugins/setup-vuetify";
import { withVuetify } from './decorators/with-vuetify.decorator'
import stringify from 'json-stringify-safe'
import resizeObserver from 'resize-observer-polyfill'

setup((app) => {
  const name = 'popup'
  setupStore(app, name, {
    async get(key: any) {
      return {
        [key as string]: JSON.parse(localStorage.getItem(key as any) ?? 'null')
      }
    },
    async set(items: { [key: string]: any }) {
      const entries = Object.entries(items)
      entries.forEach(([key, value]) => {
        const stringifiedValue = stringify(value)
        localStorage.setItem(key, stringifiedValue)
      })
    },
    async remove(keys: any) {
      localStorage.removeItem(keys as string)
    },
    async clear() {
      localStorage.clear()
    },
    onChanged: {
      addListener(changes: any) {
        changes({})
        console.log('onChanged mocked addListener')
      }
    } as any
  })
  setupI18n(app, name)
  setupVuetify(app, name)
  global.ResizeObserver = resizeObserver
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [withVuetify];

export default preview;
