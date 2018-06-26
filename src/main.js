import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
import fastclick from 'fastclick'
import Vconsole from 'vconsole'
import '../static/css/iconfont.css'
import ToastBox from './components/ToastBox/index'
import ModelBox from './components/ModelBox/index'
Vue.use(ModelBox)
Vue.use(ToastBox)
let vConsole = new Vconsole()
export default vConsole

fastclick.attach(document.body) //解决移动端点击事件200ms延迟

Vue.use(Vuex)
Vue.prototype.$http = axios;
Vue.config.productionTip = false //vuex开启开发环境日志
// or with options
Vue.use(VueLazyLoad, { //懒加载声明错误图和占位图
  preLoad: 1.3,
  error: './static/img/github.png',
  loading: './static/img/github.png',
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
