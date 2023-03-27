import { createApp } from 'vue'
import App from './App.vue'

import router from './Router'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/main.css'
import 'bootstrap/dist/js/bootstrap.js'

const app = createApp(App)

app.use(router)

app.mount('#app')

// createApp(App).mount('#app')