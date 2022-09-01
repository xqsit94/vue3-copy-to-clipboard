import { Component } from 'vue'
import CopyToClipboard from './components/CopyToClipboard.vue'
import { useCopyToClipboard } from './use/useCopyToClipboard'

const { copyToClipboard } = useCopyToClipboard()

interface AppConfig {
  globalProperties: Record<string, unknown>
}

interface App {
  config: AppConfig
  component(name: string): Component | undefined
  component(name: string, component: Component): this
}

export default {
  install(app: App) {
    app.config.globalProperties.$copyToClipboard = copyToClipboard
    app.component('CopyToClipboard', CopyToClipboard)
  },
}

export { CopyToClipboard }

export function $copyToClipboard(text: string) {
  return copyToClipboard(text)
}
