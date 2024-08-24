import { renderToString } from 'vue/server-renderer'
import { createApp } from './main'
import { createPinia } from 'pinia'


export async function render() {
  const { app } = createApp()
  const pinia = createPinia();
  app.use(pinia)

  if (typeof window === 'undefined') {
    console.log('Рендеринг на сервере');
  } else {
    console.log('Рендеринг на клиенте');
  }

  const ctx = {}
  const html = await renderToString(app, ctx)

  return { html }
}
