import { createApp } from 'vue'
import App from './App.vue'
import router from './web/utils/router';
import i18n from './web/utils/i18n';
import Cookies from "js-cookie";

import './web/utils/index'
import './web/assets/main.css'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(Cookies)
app.mount('#app')
