import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import *as echarts from 'echarts'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

const app = createApp(App)

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.config.globalProperties.$echarts = echarts
app.use(router)
app.use(ElementPlus)
app.use(createPinia())
app.use(VXETable)
app.mount('#app')
