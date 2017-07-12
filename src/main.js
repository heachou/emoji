// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import infiniteScroll from 'vue-infinite-scroll'
import VueLazyload from 'vue-lazyload'
import './assets/styles/reset.css'
import 'animate.css'
import './assets/styles/fonts/iconfont.css'

Vue.use(infiniteScroll)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 3
})
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
