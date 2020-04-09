export default {
    state: {
        cart: []
    },
    getters: {
        CART(state) {
            return state.cart
        }
    },
    actions: {
        ADD_TO_CART({commit}, good) {
            commit('SET_CART', good)
        },
        DELETE_FROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index)
        },
        DECREMENT_CART_ITEM({commit}, index) {
            commit('DECREMENT', index)
        },
        INCREMENT_CART_ITEM({commit}, index) {
            commit('INCREMENT', index)
        }
    },
    mutations: {
        SET_CART: (state, good) => {
            if (state.cart.length) {
                let isGoodInCart = false;
                state.cart.map(function(item){
                    if(item.index === good.index) {
                        isGoodInCart = true
                        item.quantity++
                    }
                })
                if (!isGoodInCart) {
                    state.cart.push(good)
                }
            }else {
                state.cart.push(good)
            }           
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        },
        DECREMENT: (state, index) => {
            if (state.cart[index].quantity > 1) {
                state.cart[index].quantity--
            } 
            
        },
        INCREMENT: (state, index) => {
            state.cart[index].quantity++
        },
        SET_TO_CART_FROM_WISHLIST: (state, index) => {
            if (state.cart.length) {
                let isGoodInCart = false;
                state.cart.map(function(item){
                    if(item.index === state.wishlist[index]) {
                        isGoodInCart = true
            //  Вызов (Товар уже в корзине!)
                    }
                })
                if (!isGoodInCart) {
                    state.cart.push(state.wishlist[index])
                }
            }else {
                state.cart.push(state.wishlist[index])
            }
        }           
    }
}