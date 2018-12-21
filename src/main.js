// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Api from './api/install'

import MuseUI from 'muse-ui'
import Message from 'muse-ui-message'
import Toast from 'muse-ui-toast'
import theme from 'muse-ui/lib/theme'
import * as colors from 'muse-ui/lib/theme/colors'
import 'muse-ui/dist/muse-ui.css'
// import theme from 'muse-ui/lib/theme'

import 'material-design-icons/iconfont/material-icons.css'
import App from './App'
import router from './router/router'
import store from './store/store'

// theme.use('dark')
// MuseUI组件
Vue.use(MuseUI)
Vue.use(Message)
Vue.use(Toast)
Vue.use(theme)
theme.add('sextant', {
  primary: colors.deepPurpleA200,
  secondary: colors.pinkA200
}, 'dark')
theme.use('sextant')
// 状态管理
Vue.use(Vuex)
// 路由
Vue.use(VueRouter)
// Api
Vue.use(Api)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  watch: {
    '$route': 'checkLogin'
  },
  created () {},
  methods: {
    checkLogin () {
      // 检查vuex中的用户登录状态
      if (sessionStorage.getItem('userInfo') && sessionStorage.getItem('userToken')) {
        this.$store.dispatch('changeUserStatusAct', sessionStorage.getItem('userInfo'))
        this.$store.dispatch('setUserTokenAct', sessionStorage.getItem('userToken'))
        this.$toast.message('船员身份确认无误')
        // 如果有登录状态赋值VUEX
      } else {
        this.$router.push('/')
        this.$toast.error('请先登录')
      }
    }
  }
})
