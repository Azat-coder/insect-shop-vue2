import Axios from "axios"

export default {
    state: {
        goods: []
    },
    mutations: {
        SET_GOODS_TO_STATE: (state, goods) => {
            state.goods = goods
        }
    },
    actions: {
        GET_GOODS_FROM_API({commit}) {
            return Axios('http://localhost:3000/goods', {
                method: "GET"
            })
            .then((goods) => {
                commit('SET_GOODS_TO_STATE', goods.data)
                return goods
            })
            .catch((error) => {
                console.log(error)
                return error
            })
        }
    },
    getters: {
        GOODS(state) {
            return state.goods
        }
    }
}