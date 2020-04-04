<template>
    <div>
        <h1 class="visually-hidden">Список товаров</h1>
        <ul>
           <goodsListItem
               v-for="good in GOODS"
               v-bind:good_data="good"
               v-bind:key="good.index"
               @addToCart="showDataIndex"
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
  }
},
  components: {
    goodsListItem
  },
  methods: {
    ...mapActions([
      'GET_GOODS_FROM_API'
    ]),
    showDataIndex(data) {
      console.log(data)
    }
  },
  mounted() {
    this.GET_GOODS_FROM_API()
  },
  computed: {
    ...mapGetters([
      'GOODS'
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
