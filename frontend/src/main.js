import { createApp  } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import '@/assets/css/reset.css'
import '@/assets/css/common.css'
import '@/assets/fonts/fontawesome-free-6.1.1-web/css/all.min.css'
import '@/assets/fonts/fontawesome-free-6.1.1-web/js/all.min.js'

//createApp(App)
//.use(router) // router 사용설정하기
//.use(store) // store 사용설정하기
//.mount('#app')

const app = createApp(App)
app.config.globalProperties.axios = axios;
app.use(store).use(router).mount('#app')

// https://medium.com/hivelab-dev/vue-express-mysql-part1-98f68408d444
