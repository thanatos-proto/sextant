import Vue from 'vue'
import Vuex from 'vuex'
// import {getStudentCampusInfo} from '@/cache/campusStudent/campusCache'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {},
    isLogin: false,
    userToken: '',

    currentPlanet: '',
    currentMission: ''

  },
  getters: {
    getUserLoginStatus (state) {
      return state.isLogin
    }
  },
  mutations: {
    changeUserStatus (state, userInfo) {
      if (userInfo) {
        state.userInfo = userInfo
        state.isLogin = true
      } else {
        sessionStorage.setItem('userInfo', {})
        sessionStorage.setItem('userToken', '')
        state.userInfo = {}
        state.isLogin = false
        state.token = ''
      }
    },
    setUserToken (state, userToken) {
      state.userToken = userToken
    }

  },
  actions: {
    changeUserStatusAct ({commit}, userInfo) {
      commit('changeUserStatus', userInfo)
    },
    setUserTokenAct ({commit}, userToken) {
      commit('setUserToken', userToken)
    }
  },
  modules: {}
})
export default store
