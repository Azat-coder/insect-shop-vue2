<template>
    <div class="wishlist">
        <div class="wishlist-top-block">
            <h1 class="wishlist-top-block-header">Мои желания</h1>
            <router-link to="/">
                <div class="button back-to-goods-btn button">
                Вернуться в каталог
                </div>
            </router-link>
        </div>
        <h2 class="wishlist-nogood-text"
            v-if="WISHLIST.length <=0"
            >Пока что в списке желаний нет ни одного товара
        </h2>
        
        <wishlistItem
            v-for="(item, index) in WISHLIST"
            :key="item.index"
            :wishlist_item_data="item"
            @deleteFromWishlist="deleteFromWishlist(index)"
            @addToCartFromWishlist="addToCartFromWishlist(index)"
        />
    </div>
</template>

<script>
  import wishlistItem from '@/components/wishlist-item.vue'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "wishlist",
    components: {
        wishlistItem
    },
   props: {
       wishlist_data: {
           type: Array,
           default() {
               return []
           }
       }
   },
    methods: {
        ...mapActions([
            'DELETE_FROM_WISHLIST',
            'ADD_TO_CART_FROM_WISHLIST'
        ]),
        deleteFromWishlist(index) {
            this.DELETE_FROM_WISHLIST(index)
        },
        addToCartFromWishlist(index) {
            this.ADD_TO_CART_FROM_WISHLIST(index)
        }
    },
    computed: {
        ...mapGetters([
            'WISHLIST'
        ])
    }
  }

</script>

<style scoped>
.wishlist {
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

.wishlist-top-block {
    height: 120px;
}

.wishlist-top-block-header {
    color: #739e0c;
    padding-left: 50px;
    padding-top: 20px;
}

.wishlist-top-block a {
    text-decoration: none;
}

.wishlist-nogood-text {
    color: #739e0c;
    padding-left: 20px;
}

</style>