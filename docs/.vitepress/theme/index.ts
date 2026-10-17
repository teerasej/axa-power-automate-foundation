import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import CopyrightFooter from './CopyrightFooter.vue'
import './style.css'
export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    'doc-after': () => h(CopyrightFooter)
  })
}
