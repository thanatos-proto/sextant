import Vue from 'vue'
import Router from 'vue-router'
import Entrance from '@/pages/Entrance'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Entrance',
      component: Entrance
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
