// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueValidator from './public/validation.js'
import router from './router'
import iview from 'iview'
import $ from 'jquery'
import resource from 'vue-resource'
import 'iview/dist/styles/iview.css';    // 使用 CSS

Vue.config.productionTip = false

//
Vue.use(iview);
Vue.use(resource);
Vue.use(VueValidator);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
