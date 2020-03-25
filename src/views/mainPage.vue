<template>
     <div>
        <h1>Главное содержимое</h1>
        <vueGoodsList/>
    </div>
</template>

<script>
import goodsList from '@/components/goodsList.vue'

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
    div {
        background-color:rgb(174, 190, 30);
        border: 3px dashed grey;
    }     
</style> 
