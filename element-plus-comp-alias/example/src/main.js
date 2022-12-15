import { createApp } from 'vue'
import './assets/main.css'
import Ele from 'element-plus'
import {createElementPlusCompAlias} from 'element-plus-comp-alias'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

const ElementPlus = createElementPlusCompAlias('my')

app.use(ElementPlus)
app.mount('#app')
