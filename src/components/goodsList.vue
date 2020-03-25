<template>
    <div>
        <h1>Список товаров</h1>
        <ul>
           <goodsListItem
               v-for="good of goods"
               v-bind:good="good"
               v-bind:key="good.name"
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
// computed: {
//   filteredGoods() {
//     return this.goods.filter(good => {
//       return name.indexOf((searchName))
//     })
//   }
// },
  components: {
    goodsListItem
  },
  mounted() {
        this.$http.get('http://localhost:3000/goods')
      .then(response => {
          return response.json()
      })
      .then(goods => {
          console.log(goods)
          this.goods = goods
      })
  }
}
</script>

<style scoped>
    div {
      background-color: rgb(122, 47, 47);
    }

    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
      
</style> 
