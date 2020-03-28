<template>
     <div>
        <h1 class="visually-hidden">Главное содержимое</h1>
        <vueSortBlock/>
        <vueGoodsList/>
    </div>
</template>    

<script>
import goodsList from '@/components/goodsList.vue'
import sortBlock from '@/components/sortBlock.vue'

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
    div {
        background-color:rgb(174, 190, 30);
        border: 3px dashed grey;
    }     
</style> 
