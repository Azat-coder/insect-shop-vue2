<template>
    <div class="cart-item">
        <img 
        class="cart-item-image"
        :src="imageURL" 
        alt="">
        <router-link 
            class="cart-item-info-link"
            :to="goodPageLink">
            <div class="cart-item-info">
                <p class="cart-item-info-name">{{cart_item_data.name}}</p>
                <p class="cart-item-info-price">{{cart_item_data.price}} руб.</p>
            </div>
        </router-link>
        <div class="cart-item-quantity">
            <span @click="decrementItem">-</span>
            <p>{{cart_item_data.quantity}} шт</p>
            <span @click="incrementItem">+</span>
        </div>
        <button
            class="button button-delete"
            @click="deleteFromCart">Удалить</button>
    </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
    name: "cart-item",
    data() {
        return {
            imageURL: ''
        }   
    },
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        deleteFromCart() {
            this.$emit('deleteFromCart')
        },
        decrementItem() {
            this.$emit('decrementItem')
        },
        incrementItem() {
            this.$emit('incrementItem')
        }
    },
    mounted() {
        this.$set(this.cart_item_data, 'quantity', 1),
        firebase.storage().ref('images').child(`${this.cart_item_data.image}.jpg`).getDownloadURL().then(data =>{
            this.imageURL = data}
        )
    },
    computed: {
        goodPageLink() {
            return `/goodPage/${this.cart_item_data.index}`
        }
    }
}
</script>

<style scoped>
.cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    border: 2px solid #739e0c;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-left: 20px;
}

.cart-item-image {
    width: 100px;
    margin-right: 40px;
    border-radius: 5px;
}

.cart-item-info {
    width: 400px;
    font-weight: bold;
    font-size: 18px;
}

.cart-item-info-link {
    color: #283136;
    text-decoration: none;
}

.cart-item-quantity {
    display: flex;
    align-items: center;
    font-weight: bold;
    width: 110px;
}

.cart-item-quantity span {
    width: 15px;
    text-align: center;
    cursor: pointer;
    font-weight: bold;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
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
    margin-right: 30px;
}
</style>