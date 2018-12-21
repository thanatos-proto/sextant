import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {},
    userPlanetList: {},
    isLogin: false,
    userToken: '',

    currentPlanet: {},
    currentMissionId: 1

  },
  getters: {
    getUserLoginStatus (state) {
      return state.isLogin
    },
    getUserInfo (state) {
      return state.userInfo
    },
    getCurrentMissionId (state) {
      return state.userInfo
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
    },
    setCurrentPlanet (state, planet) {
      state.currentPlanet = planet
    },
    setCurrentMissionId (state, missionId) {
      state.currentMissionId = missionId
    },
    setUserPlanetList (state, planetList) {
      state.userPlanetList = planetList
    }

  },
  actions: {
    changeUserStatusAct ({commit}, userInfo) {
      commit('changeUserStatus', userInfo)
    },
    setUserTokenAct ({commit}, userToken) {
      commit('setUserToken', userToken)
    },
    setCurrentPlanetAct ({commit}, planet) {
      commit('setCurrentPlanet', planet)
    },
    setCurrentMissionIdAct ({commit}, missionId) {
      commit('setCurrentMissionId', missionId)
    },
    setUserPlanetListAct ({commit}, planetList) {
      commit('setUserPlanetList', planetList)
    }
  },
  modules: {}
})
export default store
