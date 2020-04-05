<template>
    <div>
        <h1 class="visually-hidden">Список товаров</h1>
        <ul>
           <goodsListItem
               v-for="good in GOODS"
               v-bind:good_data="good"
               v-bind:key="good.index"
               @addToCart="addToCart"
           /> 
        </ul>
    </div>
</template>

<script>
import goodsListItem from '@/components/goods-list-item.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'goods-list',
  data () {  
    return {  
      categories: [
        {name: 'all', value: ''},
        {name: 'insect-collections', value: ''},
        {name: 'insects', value: ''},
        {name: 'entomological-boxes', value: ''},
        {name: 'entomological-pins', value: ''},
        {name: 'tools', value: ''},
        {name: 'books', value: ''},
        {name: 'defence-tools', value: ''}
      ],
      selected: 'all',
      sortedGoods: []   
  }
},
  components: {
    goodsListItem
  },
  methods: {
    ...mapActions([
      'GET_GOODS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    },
    sortByCategories(category) {
      this.sortedGoods = []
      this.PRODUCTS.map(function(item) {
        if(item.category === category.name) {
          this.sortedGoods.push(item)
        }
      })
    }
    // sortGoodsBySearchValue(value) {

    // }
  },
  watch: {
    SEARCH_VALUE() {
      this.sortGoodsBySearchValue(this.SEARCH_VALUE)
    }
  },
  mounted() {
    this.GET_GOODS_FROM_API()
  },
  computed: {
    ...mapGetters([
      'GOODS',
      'SEARCH_VALUE'
    ])
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
