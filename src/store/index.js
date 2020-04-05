import Vue from 'vue'
import Vuex from 'vuex' 
import auth from './auth'
import goods from './goods'
import axios from 'axios'
import VueAxios from 'vue-axios'
import cart from './cart'


Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    error: null,
    searchValue: ''
  },
  mutations: {
    setError(state, error) {
      state.error = error 
    },
    clearError(state) {
      state.error = null 
    },
    SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
      state.searchValue = value
    }
  },
  getters: {
    error: s => s.error,
    SEARCH_VALUE(state) {
      return state.searchValue
    }
  },
  actions: {
    GET_SEARCH_VALUE_TO_VUEX({commit}, value) {
      commit('SET_SEARCH_VALUE_TO_VUEX', value)
    }
  },
  modules: {
    auth,
    goods,
    cart
  }
})
  