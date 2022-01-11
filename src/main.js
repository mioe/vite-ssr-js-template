import App from './App.vue'
import { createSSRApp } from 'vue'
import { createRouter } from './router'
import { createPinia } from 'pinia'

// SSR requires a fresh app instance per request, therefore we export a function that creates a fresh app instance.
export function createApp() {
  const app = createSSRApp(App)
  const router = createRouter()
  const pinia = createPinia()
  app.use(router)
  app.use(pinia)
  return { app, router }
}
