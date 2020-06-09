import { App as Application, createApp } from 'vue'
import App from './App.vue'
import { router, routerHistory } from './router.ts'
import { globalState } from './store.ts'

declare global {
  interface Window {
    // h: HTML5History
    h: typeof routerHistory
    r: typeof router
    vm: ReturnType<Application['mount']>
  }
}

// for testing purposes
window.h = routerHistory
window.r = router

const app = createApp(App)
app.provide('state', globalState)
app.use(router)

window.vm = app.mount('#app')
