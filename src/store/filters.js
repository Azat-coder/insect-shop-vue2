export default {
    state: {
        category: [],
        ordo: [],
        searchValue: ''
    },
    getters: {
        GOODS_CATEGORY(state) {
            return state.category
        },
        SEARCH_VALUE(state) {
            return state.searchValue
        },
        GOODS_ORDO(state) {
            return state.ordo
        }
    },
    mutations: {
        SET_GOODS_CATEGORY_TO_STATE: (state, category) => {
            state.category = category
        },
        SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
            state.searchValue = value
        },
        SET_ORDOS_CATEGORY_TO_STATE: (state, ordo) => {
            state.ordo = ordo
        }
    },
    actions: {
        GET_GOODS_CATEGORY_TO_STATE({commit}, category) {
          commit('SET_GOODS_CATEGORY_TO_STATE', category)
        },
        GET_SEARCH_VALUE_TO_VUEX({commit}, value) {
            commit('SET_SEARCH_VALUE_TO_VUEX', value)
        },
        GET_ORDOS_CATEGORY_TO_STATE({commit}, ordo) {
            commit('SET_ORDOS_CATEGORY_TO_STATE', ordo)
        }
    }
}  