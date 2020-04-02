import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null,
    goods: []
  },
  mutations: {
    setError(state, error) {
      state.error = error 
    },
    clearError(state) {
      state.error = null 
    }
  },
  getters: {
    error: s => s.error,
    GOODS(state) {
      return state.goods
    }
  },
  actions: {
  },
  modules: {
    auth
  }
})
  