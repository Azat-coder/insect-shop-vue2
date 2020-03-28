<template>
    <li>
        <a href="">
            <img 
            
            :src="require(`../images/${good.image}.jpg`)"
            alt="">
            <h3>{{good.name}}</h3> 
            <p>{{good.price}}</p> 
            <button>В корзину</button>
            <button>Добавить в Мои желания</button>  
        </a>
    </li>
</template>

<script>
export default {
    props: {
        good: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
  li {
      margin-bottom: 2em;
      width: 350px;
      height: 525px; 
      border: orange 2px solid;
      margin-right: 20px;
      padding: 10px;
  }
</style>