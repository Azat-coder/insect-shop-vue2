export default {
    state: {
        wishlist: []
    },
    getters: {
        WISHLIST(state) {
            return state.wishlist
        }
    },
    actions: {
        ADD_TO_WISHLIST({commit}, good) {
            commit('SET_WISHLIST', good)
        },
        DELETE_FROM_WISHLIST({commit}, index) {
            commit('REMOVE_FROM_WISHLIST', index)
        },
        ADD_TO_CART_FROM_WISHLIST({commit}, good) {
            commit('SET_TO_CART_FROM_WISHLIST', good)
        }
    },
    mutations: {
        SET_WISHLIST: (state, good) => {
            if (state.wishlist.length) {
                let isGoodInWishlist = false;
                state.wishlist.map(function(item){
                    if(item.index === good.index) {
                        isGoodInWishlist = true
                    }
                })
                if (!isGoodInWishlist) {
                    state.wishlist.push(good)
                }
            }else {
                state.wishlist.push(good)
            }           
        },
        REMOVE_FROM_WISHLIST: (state, index) => {
            state.wishlist.splice(index, 1)
        }
    }
}