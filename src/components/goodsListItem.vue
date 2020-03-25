<template>
    <li>
       <h2>{{good.name}}</h2> 
       <p>{{good.price}}</p> 
       <button>В корзину</button>
       <button>Добавить в Мои желания</button>
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
      max-width: 350px; 
      border: orange 2px solid;
      margin-right: 20px;
      padding: 10px;
  }
</style>