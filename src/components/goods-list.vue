<template>
    <div>
        <h1 class="visually-hidden">Список товаров</h1>
        <ul>
           <goodsListItem
               v-for="good in filteredGoods"
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
      category: [],
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
      let vm = this;
      this.GOODS.map(function(item) {
        for(let i = 0; i < category.length; i++)
        if (item.category === category[i])  {
          vm.sortedGoods.push(item)
        }
      })
    },
    sortGoodsBySearchValue(value) {
      this.sortedGoods = [...this.GOODS]
      if (value) {
        this.sortedGoods = this.sortedGoods.filter(function (item) {
        return item.name.toLowerCase().includes(value.toLowerCase())
      })
      } else {
        this.sortedGoods = this.GOODS
      }     
    }
  },
  watch: {
    SEARCH_VALUE() {
      this.sortGoodsBySearchValue(this.SEARCH_VALUE)
    },
    GOODS_CATEGORY() {
      this.sortByCategories(this.GOODS_CATEGORY)
    }
  },
  mounted() {
    this.GET_GOODS_FROM_API()
      .then((response) => {
        if (response.data) {
          this.sortByCategories()
          this.sortGoodsBySearchValue()
        }
      })
   
  },
  computed: {
    ...mapGetters([
      'GOODS',
      'SEARCH_VALUE',
      'GOODS_CATEGORY'
    ]),
    filteredGoods() {
       if (this.sortedGoods.length) {
         return this.sortedGoods
       } else {
         return this.GOODS
       }
    }
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
