import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/common/js/axios.config.js'
import '@/common/css/style.css'
import '@/common/css/my_advisory.css'
import store from './store'
import httpRequest from '@/utils/httpRequest'  //����ȫ�ַ�װapi�ӿ�����
import VueCookies from 'vue-cookie'

Vue.use(VueCookies)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$http= httpRequest//ȫ��ע�����󷽷�

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
