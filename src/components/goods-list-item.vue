<template>
    <li>
        <router-link :to="goodPageLink">
            <div class="image-container">
                <img 
                    class="main-image"
                    :src="imageURL"
                    alt="Изображение товара">
                <img 
                    class="hover-image"
                    :src="hoverImageURL"
                    alt="Изображение товара">
            </div>          
            <h3 class="good-name">{{good_data.name}}</h3> 
            <div class="good-card-bottom-block">
                <p class="good-price">{{good_data.price}} руб.</p>
                <p class="good-rating">Рейтинг: {{good_data.rating}}</p>
            </div>
  
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
    border: #739e0c 2px solid;
    border-radius: 15px;
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

  .main-image,
  .hover-image {
      border-radius: 12px 12px 0px 0px;
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
	background-color: #739e0c;
	text-decoration: none;
	font-weight: 700;
	text-transform: uppercase;
	border: none;
	border-radius: 3px;	
    font-size: 14px;
}

.button:hover,
.button:focus {
	background-color: #496704;
    cursor: pointer;
	}
	
.button:active {
	background-color: #21e40f;
	color: rgba(255, 255, 255, 0.3);
	box-shadow: 0 3px rgba(0, 0, 0, 0.1) inset;
}

.good-card-bottom-block {
    display: flex; 
    margin-left: 20px;

}

.good-name {
    margin: 0;
    padding: 0;
    margin-left: 20px;
}

.good-price,
.good-rating {
    font-weight: bold;
    font-size: 18px;
}

.good-price {
    margin-right: 120px;
}
</style>