export const PATHS = {
  TS: {
    BACKGROUND: 'src/application/background/background.ts',
    // OFFSCREEN: 'src/application/background/offscreen/offscreen.ts'
    CONTENT_SCRIPT: 'src/application/content-script/content-script.ts'
  },
  HTML: {
    POPUP: 'src/application/popup/popup.html',
    OFFSCREEN: 'src/application/background/offscreen/offscreen.html'
  }
} as const
// (import.meta.env.MODE === 'staging' ? '' : 'public/')