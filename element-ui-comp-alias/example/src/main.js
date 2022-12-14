import Vue from 'vue'
import App from './App.vue'
import Ele from 'element-ui'
import {createElementUICompAlias} from 'element-ui-comp-alias'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/main.css'

const ElementUI = createElementUICompAlias('my')

Vue.use(ElementUI);

new Vue({
  render: (h) => h(App)
}).$mount('#app')
