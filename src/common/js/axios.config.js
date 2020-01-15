// axios 配置
import Vue from 'vue'
import axios from 'axios'
import { apiUrl } from '@/api/config'

// 设置 axios 请求 baseUrl
axios.defaults.baseURL = apiUrl

/**
 *设置拦截器, interceptors 相应处理
 * 所有使用 axios 的请求响应，都会优先回调到拦截器中
 * 在正确的返回情况下，数据会优先进入第一个回调方法
 * 在错误的返回情况下，错误会进入第二个回调方法
 */

axios.interceptors.response.use((response) => {
  // 统一处理数据
  return response.data
}, (error) => {
  // 处理错误的响应
  return Promise.reject(error)
})

// 绑定到 vue 原型中，组件中 ：this.$http => axios
Vue.prototype.$http = axios
