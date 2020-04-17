<template>
    <div>
        <h1 class="visually-hidden">Список товаров</h1>
        <button @click="sortListByName">Имя</button>
        <button @click="sortListByPrice">Цена</button>
        <button @click="sortListByCategory">Категория</button>
        
        <button @click="sortListByPriceReversed">Цена по убыванию</button>
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
      maxPrice: 50000,
      sortCrit: 'name',
      sortDirection: 'forward'
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
    // sortByCategories(category) {
    //   this.sortedGoods = []
    //   let vm = this;
    //   this.GOODS.map(function(item) {
    //     for(let i = 0; i < category.length; i++) {
    //         if (item.category === category[i])  {
    //         vm.sortedGoods.push(item)          
    //       }
    //     }       
    //   })
    // },
    // sortGoodsBySearchValue(value) {
    //   this.sortedGoods = [...this.GOODS]
    //   if (value) {
    //     this.sortedGoods = this.sortedGoods.filter(function (item) {
    //     return item.name.toLowerCase().includes(value.toLowerCase())
    //   })
    //   } else {
    //     this.sortedGoods = [...this.GOODS]
    //   }   
    // },
    // sortByOrdos(ordo) {
    //   this.sortedGoods = []
    //   let vm = this;
    //   this.GOODS.map(function(item) {
    //     for(let i = 0; i < ordo.length; i++) {
    //         for(let j = 0; j < item.ordos.length; j++) {
    //           if (item.ordos[j] === ordo[i] && vm.sortedGoods.indexOf(item) === -1)  {
    //             vm.sortedGoods.push(item)
    //         }           
    //       }
    //     } 
    //   })
    // },
    // sortByPrice() {
    //   let vm = this   
    //   this.sortedGoods = [...this.GOODS]
    //   this.sortedGoods = this.sortedGoods.filter(function (item) {
    //     return item.price >= vm.minPrice && item.price <= vm.maxPrice       
    //   })
    // },
    sortListByPrice() {
      console.log("click")
      this.sortCrit = 'price'
      this.sortDirection = 'forward'
    },
    sortListByPriceReversed() {
      console.log("click")
      this.sortCrit = 'price'
      this.sortDirection = 'reversed'
    },
    sortListByCategory() {
     this.sortCrit = 'category'
    },
    sortListByName() {
      this.sortCrit = 'name'
    }
  },
  // watch: {
    // SEARCH_VALUE() {
    //   this.sortGoodsBySearchValue(this.SEARCH_VALUE)
    // },
    // GOODS_CATEGORY() {
    //   this.sortByCategories(this.GOODS_CATEGORY)
    // },
    // GOODS_ORDO() {
    //   this.sortByOrdos(this.GOODS_ORDO)
    // },
    // MIN_PRICE() {
    //   this.minPrice = this.MIN_PRICE
    //   this.sortByPrice()
    // },
    // MAX_PRICE() {
    //   this.maxPrice = this.MAX_PRICE
    //   this.sortByPrice()
    // }
  // },
  mounted() {
    this.GET_GOODS_FROM_API()
      .then((response) => {
        if (response.data) {
          // this.sortByCategories()
          // this.sortGoodsBySearchValue()
          // this.sortByPrice()
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
      //  if (this.sortedGoods.length) {
      //    return this.sortedGoods
      //  } else {
      //    return this.GOODS
      //  }
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
        return sorted
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
