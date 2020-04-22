import firebase from 'firebase/app'  

export default {
    state: {
        orders: []
    },
    mutations: {
        SET_ORDERS_TO_STATE: (state, goods) => {
            state.goods = goods
        }
    },
    actions: {
        async setOrder({dispatch, commit}, orderInfo) {
            try {
                console.log(orderInfo)
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/orders`).push({
                    orderInfo: orderInfo 
                })
              } catch (e) {
                  commit('setError', e)
                throw e
              }
        },
        async GET_ORDERS_FROM_API({commit, dispatch}) {   
            try {
                const uid = await dispatch('getUid')
                firebase.database().ref(`/users/${uid}/orders`).once('value').then(resultOrders => {
                    this.resultOrders = resultOrders.val()
                    console.log(resultOrders.val())
                   
                    commit ('SET_ORDERS_TO_STATE', this.resultOrders)
                })            
            } catch (e) {
                commit('setError', e)
                throw e
            }
        }
    },
    getters: {
        ORDERS(state) {
            return state.goods
        }
    }
}