<template>
    <div class="wishlist-item">
        <img 
        class="wishlist-item-image"
        :src="require(`../images/${wishlist_item_data.image}.jpg`)" 
        alt="">
        <div class="wishlist-item-info">
            <p>{{wishlist_item_data.name}}</p>
            <p>{{wishlist_item_data.price}} руб.</p>
        </div>
        <div class="wishlist-item-buttons">
            <button @click="addToCartFromWishlist">Добавить в корзину</button>
            <button @click="deleteFromWishlist">Удалить из списка желаний</button>
        </div>
       
    </div>
</template>

<script>

export default {
    name: "wishlist-item",
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
    }
}
</script>

<style scoped>
.wishlist-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
}

.wishlist-item-image {
    width: 100px;
    margin-right: 40px;
}

.wishlist-item-info {
    width: 400px;
}

.wishlist-item-buttons {
    width: 250px;
    display: flex;
    justify-content: space-between;
}

.wishlist-item-buttons button {
    width: 100px;
    font-size: 12px;
}
</style>