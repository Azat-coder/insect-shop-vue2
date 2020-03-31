<template>
    <li>
        <router-link to="/goodPage">
            <img 
            :src="require(`../images/${good.image}.jpg`)"
            alt="">
            <h3>{{good.name}}</h3> 
            <p>{{good.price}}</p> 
            <div class="button-block">
                <button class="button">В корзину</button>
                <button class="button">Добавить в Мои желания</button>
            </div>            
        </router-link>
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
      width: 380px;
      height: 450px; 
      border: orange 2px solid;
      margin-right: 20px;
      
  }

  a {
      text-decoration: none;
      color: honeydew;
  }

  img {
      width: 380px;  
  }

  .button-block {
      display: flex;
      justify-content: space-around;
  }
  .button {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 150px;
	height: 50px;
	color: #ffffff;
	background-color: #fb565a;
	text-decoration: none;
	font-weight: 500;
	text-transform: uppercase;
	border: none;
	border-radius: 3px;	
}

.button:hover,
.button:focus {
	background-color: #e74246;
	}
	
.button:active {
	background-color: #d7373b;
	color: rgba(255, 255, 255, 0.3);
	box-shadow: 0 3px rgba(0, 0, 0, 0.1) inset;
}
</style>