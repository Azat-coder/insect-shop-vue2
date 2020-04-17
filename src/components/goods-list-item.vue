<template>
    <li>
        <router-link :to="goodPageLink">
            <div class="image-container">
                <img 
                :src="imageURL"
                alt="Изображение товара">
                <img class="hover-image"
                :src="hoverImageURL"
                alt="Изображение товара">
            </div>          
            <h3>{{good_data.name}}</h3> 
            <p>{{good_data.price}} руб.</p>
            <p>Рейтинг: {{good_data.rating}}</p>  
        </router-link>
        <div class="button-block">
            <button class="button" @click="addToCart">В корзину</button>
            <button class="button" @click="addToWishlist">Добавить в Мои желания</button>
        </div>                  
    </li>
</template>

<script>
import firebase from 'firebase/app'

export default {
    name: 'goods-list-item',
    props: {
        good_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            imageURL: '',
            hoverImageURL: ''
        }   
    },
    methods: {
        addToCart() {
            this.$emit('addToCart',this.good_data)
        },
        addToWishlist() {
            this.$emit('addToWishlist',this.good_data)
        }, 
    },
    computed: {
        goodPageLink() {
            return `/goodPage/${this.good_data.index}`
        }
    },
    mounted() {
        firebase.storage().ref('images').child(`${this.good_data.image}.jpg`).getDownloadURL().then(data =>{
            this.imageURL = data}
        ),
        firebase.storage().ref('images').child(`${this.good_data.hoverImage}.jpg`).getDownloadURL().then(data =>{
            this.hoverImageURL = data}
        )
    }
}
</script>

<style scoped>
  li {
    margin-bottom: 2em;
    width: 380px;
    height: 450px; 
    border: #eeeeee 2px solid;
    margin-right: 20px;   
  }

  a {
    text-decoration: none;
    color: #283136;
  }

  img {
      width: 380px;  
  }

  .image-container {
      position: relative;
  }

  .hover-image {
      display: none;   
  }

 .image-container:hover .hover-image {
      display: block;
      position: absolute;
      top: 0px;
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
    cursor: pointer;
	}
	
.button:active {
	background-color: #d7373b;
	color: rgba(255, 255, 255, 0.3);
	box-shadow: 0 3px rgba(0, 0, 0, 0.1) inset;
}
</style>