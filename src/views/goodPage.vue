<template>
    <div>
        <h1 class="visually-hidden">Страница товара</h1>
        
        <h2>{{good.name}}</h2>
        <img 
            :src="require(`../images/${good.image}.jpg`)"
            alt=""
        >
    </div>
</template>

<script>
export default {
    computed: {
        good () {
            return this.$store.state.goods
        }
    }
}
</script>

<style scoped>
img {
    width: 900px;
}
</style>