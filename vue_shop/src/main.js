/*
 * @Author: your name
 * @Date: 2020-06-28 10:32:27
 * @LastEditTime: 2020-07-06 20:18:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_shop\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import './plugins/element.js'

import 'element-ui/lib/theme-chalk/index.css';
// 导入全局样式表
import './assets/css/global.css'
import './assets/fonts/iconfont.css'

import { Message } from 'element-ui'
import axios from 'axios'
Vue.use(ElementUI);
//配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios
Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
