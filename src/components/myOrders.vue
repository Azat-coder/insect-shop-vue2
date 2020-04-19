<template>
    <div class="myOrders">
        <div class="myOrders-top-block">
            <h1>Мои заказы</h1>
            <b v-if="ORDERS.length > 0">У вас еще нет ни одного заказа в нашем магазине</b>
            <hr/>
            <router-link to="/">
                <div class="back-to-goods-btn button">
                Вернуться в каталог
                </div>
            </router-link>
        </div>
        <ul>
           <ordersListItem
               v-for="order in ORDERS"
               v-bind:order_data="order"
               v-bind:key="order.index"
           /> 
        </ul>
    </div>
</template>

<script>
import ordersListItem from '@/components/order-item.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
    name: "order-list",
    components: {
        ordersListItem
    },
    computed: {
        ...mapGetters([
            'ORDERS'
        ])
    },
    methods: {
    ...mapActions([
        'GET_ORDERS_FROM_API'
        ])
    },
    mounted() {
        this.GET_ORDERS_FROM_API()
        .then((response) => {
            if (response.data) {
            console.log('')
            }
        })
    }
}
</script>