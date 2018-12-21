import Vue from 'vue'
import Router from 'vue-router'
import Entrance from '@/pages/Entrance'
import Home from '@/pages/Home'
import Editor from '@/pages/Editor'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor
    }
  ]
})
