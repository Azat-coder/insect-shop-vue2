import Vue from 'vue'
import Vuex from 'vuex' 
import auth from './auth'
import goods from './goods'
import cart from './cart'
import filters from './filters'
import wishlist from './wishlist'
import comment from './comment'
import createPersistedState from "vuex-persistedstate"
import info from './info'
import order from './order'


Vue.use(Vuex)


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
    comment,
    info,
    order
  },
  plugins: [createPersistedState()]
})
  