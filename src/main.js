import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from'./router'
const app = createApp(App)

app.use(createPinia())

app.use(router)

app.mount('#app')

// 全局指令注册
import {lazyPlugin} from "@/directives";
app.use(lazyPlugin)