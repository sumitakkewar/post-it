import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

require('bootstrap');

import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(store).mount('#app')
