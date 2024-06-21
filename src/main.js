import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)

console.log(import.meta.env)

app.mount('#app')