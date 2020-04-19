<template>
    <div class="order-item">
        
        <div class="order-item-info">
            <div class="order-item">
                 <p>Заказ номер: {{order_data.id}}</p>
                 <p>{{order_data.orderInfo[0].name}} </p>
                 <p>{{order_data.orderInfo[0].price}}  руб.</p>
                 <p>{{order_data.orderInfo[0].quantity}}  шт.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "order-item",
    props: {
        order_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
}
</script>

<style scoped>
.order-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: start;
    align-items: center;
}
.order-item p {
    margin-right: 20px
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