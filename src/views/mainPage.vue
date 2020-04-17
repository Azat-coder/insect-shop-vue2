<template>
     <div>
        <h1 class="visually-hidden">Главное содержимое</h1>
        <vueGoodsList/>
    </div>
</template>    

<script>
import goodsList from '@/components/goods-list.vue'


export default {
    name: 'mainPage',
    data() {
    return {
    }
  },
  components: {
    vueGoodsList: goodsList
  }
}
</script>

<style scoped>
 
</style> 
