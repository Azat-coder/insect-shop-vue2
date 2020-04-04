<template>
     <div>
        <h1 class="visually-hidden">Главное содержимое</h1>
        <vueSortBlock/>
        <vueGoodsList/>
    </div>
</template>    

<script>
import goodsList from '@/components/goods-list.vue'
import sortBlock from '@/components/sort-block.vue'

export default {
    name: 'mainPage',
    data() {
    return {
    }
  },
  components: {
    vueGoodsList: goodsList,
    vueSortBlock: sortBlock
  }
}
</script>

<style scoped>
 
</style> 
