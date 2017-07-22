// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入默认主题
// import '../theme/index.css'
// import 'element-ui/lib/theme-default/index.css'

import '../static/css/element-theme/index.css'
import ElementUI from 'element-ui'
import axios from 'axios'

import '../static/css/main.css'
var a = 1
// 浅绿色主题
import '../static/css/theme-green/color-green.css'
// 黑色主题
// import '../static/css/color-dark.css'


Vue.config.productionTip = false //生产环境提示，这里设置成了false

Vue.use(ElementUI)

Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
