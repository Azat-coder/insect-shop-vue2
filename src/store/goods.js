import firebase from 'firebase/app'
import 'firebase/database'


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
            try {
                firebase.database().ref('goods/').once('value').then(resultGoods => {
                    this.resultGoods = resultGoods.val()
                    console.log(resultGoods.val())
                    commit ('SET_GOODS_TO_STATE', this.resultGoods)
                })            
            } catch (e) {
                commit('setError', e)
                throw e
            }
        }
    },
    getters: {
        GOODS(state) {
            return state.goods
        }
    }
}