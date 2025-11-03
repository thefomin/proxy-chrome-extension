import { defineManifest } from '@crxjs/vite-plugin'
import pkg from './package.json'

export default defineManifest({
  manifest_version: 3,
  name: pkg.name,
  version: pkg.version,
  icons: {
    48: 'public/logo.png',
  },
  action: {
    default_icon: {
      48: 'public/logo.png',
    },
    default_popup: 'src/app/index.html',
  },
  permissions: [
    'sidePanel',
    'contentSettings',
  ],
  content_scripts: [{
    js: ['src/app/content/main.tsx'],
    matches: ['https://*/*'],
  }],
  side_panel: {
    default_path: 'src/app/sidepanel/index.html',
  },
  background:{
    service_worker: 'src/app/background.ts',
    type: "module"
  }
})
