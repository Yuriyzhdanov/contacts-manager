import { createApp } from 'vue'
import App from './App.vue'

import './materialize.js'

const app = createApp(App)

const vm = app.mount('#app')

window.vm = vm
