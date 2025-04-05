import { createApp } from 'vue'
import App from './App.vue'

import './materialize.js'

import 'materialize-css/dist/css/materialize.min.css'
import './css/style.css'

const app = createApp(App)

const vm = app.mount('#app')

window.vm = vm
