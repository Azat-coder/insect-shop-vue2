<template>
    <div>
        <h1 class="visually-hidden">Список товаров</h1>
        <ul>
           <goodsListItem
               v-for="good of goods"
               v-bind:good="good"
               v-bind:key="good.name"
               @addToCart="addToCart"
           /> 
        </ul>
    </div>
</template>

<script>
import goodsListItem from '@/components/goodsListItem.vue'
export default {
  name: 'goodsList',
  data () {  
      return {     
        goods: []
  }
},
  components: {
    goodsListItem
  },
  mounted() {
        this.$http.get('goods')
      .then(response => {
          return response.json()
      })
      .then(goods => {
          console.log(goods)
          this.goods = goods
      })
  },
  addToCart(data) {
    console.log(data)
  }
}
</script>

<style scoped>
    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }    
</style> 
