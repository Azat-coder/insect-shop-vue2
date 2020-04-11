<template>
    <div>
        <h1 class="visually-hidden">Список товаров</h1>
        <ul>
           <goodsListItem
               v-for="good in filteredGoods"
               v-bind:good_data="good"
               v-bind:key="good.index"
               @addToCart="addToCart"
               @addToWishlist="addToWishlist"
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
      sortedGoods: [],
      minPrice: 0,
      maxPrice:50000
  }
},
  components: {
    goodsListItem
  },
  methods: {
    ...mapActions([
      'GET_GOODS_FROM_API',
      'ADD_TO_CART',
      'ADD_TO_WISHLIST'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    },
    addToWishlist(data) {
      this.ADD_TO_WISHLIST(data)
    },
    sortByCategories(category) {
      this.sortedGoods = []
      let vm = this;
      this.GOODS.map(function(item) {
        for(let i = 0; i < category.length; i++) {
            if (item.category === category[i])  {
            vm.sortedGoods.push(item)          
          }
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
    },
    sortByOrdos(ordo) {
      this.sortedGoods = []
      let vm = this;
      this.GOODS.map(function(item) {
        for(let i = 0; i < ordo.length; i++) {
            for(let j = 0; j < item.ordos.length; j++) {
              if (item.ordos[j] === ordo[i] && vm.sortedGoods.indexOf(item) === -1)  {
                vm.sortedGoods.push(item)
            }           
          }
        } 
      })
    },
    sortByPrice() {
      let vm = this   
      this.sortedGoods = [...this.GOODS]
      this.sortedGoods = this.sortedGoods.filter(function (item) {
        return item.price >= vm.minPrice && item.price <= vm.maxPrice       
      })
    }
  },
  watch: {
    SEARCH_VALUE() {
      this.sortGoodsBySearchValue(this.SEARCH_VALUE)
    },
    GOODS_CATEGORY() {
      this.sortByCategories(this.GOODS_CATEGORY)
    },
    GOODS_ORDO() {
      this.sortByOrdos(this.GOODS_ORDO)
    },
    MIN_PRICE() {
      this.minPrice = this.MIN_PRICE
      this.sortByPrice()
    },
    MAX_PRICE() {
      this.maxPrice = this.MAX_PRICE
      this.sortByPrice()
    }
  },
  mounted() {
    this.GET_GOODS_FROM_API()
      .then((response) => {
        if (response.data) {
          this.sortByCategories()
          this.sortGoodsBySearchValue()
          this.sortByPrice()
        }
      })
   
  },
  computed: {
    ...mapGetters([
      'GOODS',
      'SEARCH_VALUE',
      'GOODS_CATEGORY',
      'GOODS_ORDO',
      'MIN_PRICE',
      'MAX_PRICE'

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
