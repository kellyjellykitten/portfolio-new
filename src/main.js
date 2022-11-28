import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Menu from 'primevue/menu';

import './assets/app.css'
import 'primevue/resources/themes/arya-green/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css' //icons

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.component('Menu', Menu)

app.mount('#app')
