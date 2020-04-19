<template>
    <div>
        <h1 class="visually-hidden">Список товаров</h1>
        <div class="sort-block">
          <button @click="sortListByName">Имя</button>
          <button @click="sortListByCategory">Категория</button>
          <button @click="sortListByPrice">Цена по возрастанию</button>       
          <button @click="sortListByPriceReversed">Цена по убыванию</button>
          <button @click="sortListByRating">По рейтингу</button>
        </div>      
        <ul>
           <goodsListItem
               v-for="good in filteredGoods"
               v-bind:good_data="good"
               v-bind:key="good.index"
               @addToCart="addToCart"
               @addToWishlist="addToWishlist"
           /> 
        </ul>
        <div class="pagination-block">
          <button 
          :disabled = "pageNumber===0"
          @click="prevPage">
            Назад
          </button>
          <button 
          @click="nextPage"
          :disabled = "filteredGoods.length < this.size"
          >
            Вперед
          </button>
        </div>
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
      maxPrice: 50000,
      sortCrit: 'name',
      sortDirection: 'forward',
      pageNumber: 0,
      size: 6
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
    
    sortListByPrice() {
      this.sortCrit = 'price'
      this.sortDirection = 'forward'
    },
    sortListByPriceReversed() {
      this.sortCrit = 'price'
      this.sortDirection = 'reversed'
    },
    sortListByCategory() {
     this.sortCrit = 'category'
    },
    sortListByName() {
      this.sortCrit = 'name'
    },
    sortListByRating() {
      this.sortCrit = 'rating'
      this.sortDirection = 'reversed'
    },
    nextPage(){
      this.pageNumber++;
    },
    prevPage(){
      this.pageNumber--;
    }
  },
  mounted() {
    this.GET_GOODS_FROM_API()
      .then((response) => {
        if (response.data) {
         console.log('')
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
      const filtered = this.GOODS
        .filter(good => {
          return this.SEARCH_VALUE == '' || good.name.toLowerCase().indexOf(this.SEARCH_VALUE.toLowerCase()) !== -1;
        })
        .filter(good => {
          return this.GOODS_CATEGORY == '' || this.GOODS_CATEGORY.indexOf(good.category) != -1;
        })
        .filter(good => {
            return this.GOODS_ORDO == '' || this.GOODS_ORDO.indexOf(good.ordos[0]) != -1 || this.GOODS_ORDO.indexOf(good.ordos[1]) != -1 || this.GOODS_ORDO.indexOf(good.ordos[2]) != -1 || this.GOODS_ORDO.indexOf(good.ordos[2]) != -1 || this.GOODS_ORDO.indexOf(good.ordos[3]) != -1 || this.GOODS_ORDO.indexOf(good.ordos[4]) != -1 || this.GOODS_ORDO.indexOf(good.ordos[5]) != -1 || this.GOODS_ORDO.indexOf(good.ordos[6]) != -1 || this.GOODS_ORDO.indexOf(good.ordos[7]) != -1 || this.GOODS_ORDO.indexOf(good.ordos[8]) != -1 || this.GOODS_ORDO.indexOf(good.ordos[9]) != -1 || this.GOODS_ORDO.indexOf(good.ordos[10]) != -1
        })
        .filter(good => {
          return Number(good.price) >= this.MIN_PRICE && Number (good.price) <= this.MAX_PRICE;
        })
          let that = this
        let sorted = filtered.sort(function(d1,d2) {
        return (d1[that.sortCrit] > d2[that.sortCrit]) ? 1 : -1;
          
      })
      if (that.sortDirection === 'reversed') {
            sorted = sorted.reverse();
          }

          const start = this.pageNumber * this.size,
          end = start + this.size;
          let paginated = sorted.slice(start, end)
          
        return paginated
    },
    pageCount() {
      let l = this.GOODS.length,
          s = this.size
      return Math.ceil(l/s);
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
