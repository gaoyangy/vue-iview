// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Validator from 'vue-validator'
// import VueValidator from './public/validation.js'
import router from './router'
import iview from 'iview'
import $ from 'jquery'

// import resource from 'vue-resource'		//不维护被抛弃了
import 'iview/dist/styles/iview.css';    // 使用 CSS
import axios from 'axios'					//强大的请求方式
Vue.prototype.$http = axios;

Vue.config.productionTip = false

//
Vue.use(iview);
// Vue.use(resource);			//使用vue-resource
Vue.use(Validator);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
