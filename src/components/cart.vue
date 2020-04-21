<template>
    <div class="cart">
        <div class="cart-top-block">
            <h1 class="cart-top-block-header">Корзина товаров</h1>
            <router-link to="/">
                <div class="back-to-goods-btn button">
                Вернуться в каталог
                </div>
            </router-link>
        </div>
        <h2 class="cart-nogood-text"
            v-if="CART.length <=0"
            >Пока что в корзине нет ни одного товара
        </h2>
        
        <cartItem
            v-for="(item, index) in CART"
            :key="item.index"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
            @decrementItem="decrementItem(index)"
            @incrementItem="incrementItem(index)"
        />

        <div class="cart-bottom-block"
            v-if="CART.length">
            <p class="cart-bottom-block-info">В корзине 
                <span>{{cartTotalCount}}</span>  
                товаров на сумму 
                <span>{{cartTotalPrice}}</span> 
                руб.
            </p>
            <button 
                class="button buy-button" 
                @click="createOrder"
            >
            Купить
            </button>
            <button
                class="button" 
                @click="clearCart">Очистить корзину</button>
        </div>
    </div>
</template>

<script>
  import cartItem from '@/components/cart-item.vue'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "cart",
    components: {
        cartItem
    },
   props: {
       cart_data: {
           type: Array,
           default() {
               return []
           }
       }
   },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
            'DECREMENT_CART_ITEM',
            'INCREMENT_CART_ITEM',
            'CLEAR_CART'
        ]),
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index)
        },
        decrementItem(index) {
            this.DECREMENT_CART_ITEM(index)
        },
        incrementItem(index) {
            this.INCREMENT_CART_ITEM(index)
        },
        clearCart() {
            this.CLEAR_CART()
        },
        createOrder() {
            const orderInfo = this.CART
            this.$store.dispatch('setOrder', orderInfo)
        }
    },
    computed: {
        ...mapGetters([
            'CART'
        ]),
        cartTotalPrice() {
            let result = []
            for(let item of this.CART) {
                result.push(item.price * item.quantity)
            }
            result = result.reduce(function(sum, el) {
                return sum + el
            })
            return result
        },
        cartTotalCount() {
            let result = []
            for(let item of this.CART) {
                result.push(item.quantity)
            }
            result = result.reduce(function(sum, el) {
                return sum + el
            })
            return result
        }
    }
  }

</script>

<style scoped>
.cart {
    display: flex;
    flex-direction: column;
}

.back-to-goods-btn {
    position: relative;
    top: -50px; 
    right: -700px;  
    width: 150px;
    height: 50px;
    text-align: center;
    text-decoration: none;
}

.button {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 150px;
	height: 50px;
	color: #ffffff;
	background-color: #739e0c;
	text-decoration: none;
	font-weight: 700;
	text-transform: uppercase;
	border: none;
	border-radius: 3px;	
    font-size: 14px;
}

.button:hover,
.button:focus {
	background-color: #496704;
    cursor: pointer;
}

.buy-button {
    margin-right: 20px;
}

.cart-top-block {
    height: 120px;
}

.cart-top-block a {
    text-decoration: none;
}

.cart-top-block-header {
    color: #739e0c;
    padding-left: 50px;
    padding-top: 20px;

}

.cart-nogood-text {
    color: #739e0c;
    padding-left: 20px;
}

.cart-bottom-block {
    display: flex;
    padding: 20px;
    font-weight: bold;
    font-size: 24px;
    color: #739e0c;
}

.cart-bottom-block span {
    color: #496704;
}

.cart-bottom-block-info {
    position: relative;
    top: -20px;
}

.buy-button  {
    margin-left: 150px;
}
</style>