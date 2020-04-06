export default {
    state: {
        category: []
    },
    getters: {
        GOODS_CATEGORY(state) {
            return state.category
        },
        SEARCH_VALUE(state) {
            return state.searchValue
        }
    },
    mutations: {
        SET_GOODS_CATEGORY_TO_STATE: (state, category) => {
            state.category = category
        },
        SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
            state.searchValue = value
        }
    },
    actions: {
        GET_GOODS_CATEGORY_TO_STATE({commit}, category) {
          commit('SET_GOODS_CATEGORY_TO_STATE', category)
        },
        GET_SEARCH_VALUE_TO_VUEX({commit}, value) {
            commit('SET_SEARCH_VALUE_TO_VUEX', value)
        }
    }
}  