import './style.css'
import { createApp } from './main'
import { createPinia } from 'pinia';

const { app } = createApp()
const pinia = createPinia();
app.use(pinia);

app.mount('#app')
