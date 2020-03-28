import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null,
    goods: {
      "name": "Насекомые черноморского побережья",
      "price": "10000 руб.",
      "image": "../images/diptera-1.jpg"
    }   
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
    error: s => s.error
  },
  actions: {
  },
  modules: {
    auth
  }
})
  