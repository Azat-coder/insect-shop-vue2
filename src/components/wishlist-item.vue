<template>
    <div class="wishlist-item">
        <img 
        class="wishlist-item-image"
        :src="imageURL" 
        alt="">
        <router-link 
            class="wishlist-item-info-link"
            :to="goodPageLink">
            <div class="wishlist-item-info">
                <p>{{wishlist_item_data.name}}</p>
                <p>{{wishlist_item_data.price}} руб.</p>
            </div>
        </router-link>
        <div class="wishlist-item-buttons">
            <button
                class="button button-add_to_cart" 
                @click="addToCartFromWishlist"
            >
            Добавить в корзину
            </button>
            <button 
                class="button button-delete"
                @click="deleteFromWishlist"
            >
            Удалить 
            </button>
        </div>
       
    </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
    name: "wishlist-item",
    data() {
        return {
            imageURL: ''
        }   
    },
    props: {
        wishlist_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        deleteFromWishlist() {
            this.$emit('deleteFromWishlist')
        },
        addToCartFromWishlist () {
            this.$emit('addToCartFromWishlist')
        }
    },
    computed: {
        goodPageLink() {
            return `/goodPage/${this.wishlist_item_data.index}`
        }
    },
    mounted() {
        firebase.storage().ref('images').child(`${this.wishlist_item_data.image}.jpg`).getDownloadURL().then(data =>{
            this.imageURL = data}
        )
    },
}
</script>

<style scoped>
.wishlist-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    border: 2px solid #739e0c;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-left: 20px;
}

.wishlist-item-image {
    width: 100px;
    margin-right: 40px;
    border-radius: 5px;
}

.wishlist-item-info {
    width: 400px;
    font-weight: bold;
    font-size: 18px;
}

.wishlist-item-info-link {
    color: #283136;
    text-decoration: none;
}

.wishlist-item-buttons {
    width: 250px;
    display: flex;
    justify-content: space-between;
} 

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 25px;
  color: #ffffff;
  background-color: #739e0c;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  border-radius: 3px;	
  font-size: 12px;
}

.button:hover,
.button:focus {
  background-color: #496704;
  cursor: pointer;
}

.button-delete {
    width: 70px;
    margin-right: 30px;
}

.button-add_to_cart {
    margin-right: 10px;
}
</style>