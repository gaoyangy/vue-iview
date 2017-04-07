import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Sign from '@/components/Sign'
Vue.use(Router)
export default new Router({
  hashbang:true,
  history:true,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/sign/:id',
      name:'sign',
      component: Sign
    }
  ]
})
