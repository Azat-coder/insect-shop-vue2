<template>
    <div class="cart">
        <div class="cart-top-block">
            <h1>Корзина</h1>
            <router-link to="/">
                <div class="back-to-goods-btn button">
                Вернуться в каталог
                </div>
            </router-link>
        </div>
        <h2
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
            <p>В корзине 
                <span>{{cartTotalCount}}</span>  
                товаров на сумму 
                <span>{{cartTotalPrice}}</span> 
                руб.
            </p>
            <button class="buy-button">
                Купить
            </button>
            <button @click="clearCart">Очистить корзину</button>
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
    border: chartreuse 1px solid;
    width: 150px;
    height: 50px;
    text-align: center;
}

.cart-top-block {
    height: 120px;
}

.cart-bottom-block {
    display: flex;
    padding: 20px;
    font-weight: bold;
    font-size: 24px;
}

.cart-bottom-block span {
    color: green;
}

.buy-button  {
    margin-left: 150px;
}
</style>