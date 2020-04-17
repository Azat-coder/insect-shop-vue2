export default {
    state: {
        category: [],
        ordo: [],
        searchValue: '',
        minPrice: 0,
        maxPrice: 50000
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
        },
        MIN_PRICE(state) {
            return state.minPrice
        },
        MAX_PRICE(state) {
            return state.maxPrice
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
        },
        SET_MIN_PRICE_TO_STATE: (state, minPrice) => {
            state.minPrice = minPrice
        },
        SET_MAX_PRICE_TO_STATE: (state, maxPrice) => {
            state.maxPrice = maxPrice
        },
        CLEAR_FILTER_STATE: (state) => {
            state.category = []
            state.ordo = []
            state.searchValue = ''
            state.minPrice = 0
            state.maxPrice = 50000
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
        },
        GET_MIN_PRICE_TO_STATE({commit}, minPrice) {
            commit('SET_MIN_PRICE_TO_STATE', minPrice)
        },
        GET_MAX_PRICE_TO_STATE({commit}, maxPrice) {
            commit('SET_MAX_PRICE_TO_STATE', maxPrice)
        },
        CLEAR_FILTERS({commit}) {
            commit('CLEAR_FILTER_STATE')
        }
    }
}  