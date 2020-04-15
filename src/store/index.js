import Vue from 'vue'
import Vuex from 'vuex' 
import auth from './auth'
import goods from './goods'
import axios from 'axios'
import VueAxios from 'vue-axios'
import cart from './cart'
import filters from './filters'
import wishlist from './wishlist'
import comment from './comment'
import createPersistedState from "vuex-persistedstate"


Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    error: null
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
    auth,
    goods,
    cart,
    filters,
    wishlist,
    comment
  },
  plugins: [createPersistedState()]
})
  