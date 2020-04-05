<template>
    <div class="cart-item">
        <img 
        class="cart-item-image"
        :src="require(`../images/${cart_item_data.image}.jpg`)" 
        alt="">
        <div class="cart-item-info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}} руб.</p>
        </div>
        <div class="cart-item-quantity">
            <span @click="decrementItem">-</span>
            <p>{{cart_item_data.quantity}} шт</p>
            <span @click="incrementItem">+</span>
        </div>
        <button @click="deleteFromCart">Удалить</button>
    </div>
</template>

<script>

export default {
    name: "cart-item",
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
    }
}
</script>

<style scoped>
.cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
}

.cart-item-image {
    width: 100px;
    margin-right: 40px;
}

.cart-item-info {
    width: 400px;
}

.cart-item-quantity {
    display: flex;
    align-items: center;
}

.cart-item-quantity span {
    width: 15px;
    text-align: center;
    cursor: pointer;
    font-weight: bold;
}
</style>