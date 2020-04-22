<template>
    <div class="goodPage">
        <h1 class="visually-hidden">Страница товара{{goodIndex}}</h1>
        <div class="good-page-top-block">
            <div class="good-page-info">
                <div class="good-page-info-back-button">
                    <router-link 
                        to="/"
                        class="good-page-info-back-button-link"
                    >
                    Назад к списку товаров
                    </router-link>
                </div>
                
                <h2 class="good-page-info-name">{{good.name}}</h2> 
                <p class="good-page-info-price">{{good.price}} руб.</p>
                <p class="good-page-info-rating">Рейтинг товара: {{good.rating}}</p>
                <div class="good-page-button-block">
                    <button 
                        class="button button-add_to_cart" 
                        @click="addToCart(good)"
                    >
                    В корзину
                    </button>
                    <button 
                        class="button" 
                        @click="addToWishlist(good)"
                    >
                    Добавить в Мои желания
                    </button>
                </div>
            </div>
            <div class="good-page-photo">
                <router-link :to="photoShowLink">
                    <img 
                        class="good-page-photo-main"
                        :src="imageURL"
                        alt="Фото товара 1"
                    >
                </router-link>
                <router-link :to="photoShowLink">
                    <img 
                        class="good-page-photo-small"
                        :src="hoverImageURL"
                        alt="Фото товара 2"
                    >
                </router-link>
                <router-link :to="photoShowLink">
                    <img 
                        class="good-page-photo-small"
                        :src="image3URL"
                        alt="Фото товара 3"
                    >
                </router-link> 
                <router-link :to="photoShowLink"> 
                    <img 
                        class="good-page-photo-small"
                        :src="image4URL"
                        alt="Фото товара 4"
                    >
                </router-link>          
            </div>
        </div>
        <div class="good-page-bottom-block">
            <div class="good-page-description">
                <h3 class="good-page-description-header">Описание</h3>
                <p>{{GOODS[goodIndex-1].description}}</p>
            </div>
            <div class="good-page-feedback">
                <h3 class="good-page-feedback-header">Отзывы</h3>
                <container/>
                <comment-form/>
            </div>
        </div>    
    </div>
</template>

<script>
import container from '../components/container.vue'
import commentForm from '../components/commentForm.vue'
import {mapActions, mapGetters} from 'vuex'
import firebase from 'firebase/app'

export default {
    data() {
        return {
            imageURL: '',
            hoverImageURL: '',
            image3URL: '',
            image4URL: ''
        }   
    },
    components: {
        container,
        commentForm
    },
    methods: {
        ...mapActions([
      'ADD_TO_CART',
      'ADD_TO_WISHLIST'
    ]),
        addToCart(data) {
          this.ADD_TO_CART(data)
        },
        addToWishlist(data) {
          this.ADD_TO_WISHLIST(data)
        }
    },
    computed: {
        ...mapGetters([
        'GOODS'
        ]),
        goodIndex() {
            return this.$route.params.index
        },
        good() {
            return this.GOODS[this.goodIndex-1]
        },
        photoShowLink() {
            return `/photoShow/${this.good.index}`
        },
        // goodsRating() {

        // }
    },
    mounted() {
        firebase.storage().ref('images').child(`${this.GOODS[this.goodIndex-1].image}.jpg`).getDownloadURL().then(data =>{
            this.imageURL = data}
        ),
        firebase.storage().ref('images').child(`${this.GOODS[this.goodIndex-1].hoverImage}.jpg`).getDownloadURL().then(data =>{
            this.hoverImageURL = data}
        ),
        firebase.storage().ref('images').child(`${this.GOODS[this.goodIndex-1].image_3}.jpg`).getDownloadURL().then(data =>{
            this.image3URL = data}
        ),
        firebase.storage().ref('images').child(`${this.GOODS[this.goodIndex-1].image_4}.jpg`).getDownloadURL().then(data =>{
            this.image4URL = data}
        )
    }
}
</script>

<style scoped>
.goodPage {
    display: flex;
    flex-direction: column;
}

.good-page-top-block {
    display: flex;
    justify-content: space-between;
}

.good-page-photo {
    border: 2px solid #739e0c;
    border-radius: 15px;
    width: 600px;
    margin-top: 10px;
}

.good-page-photo-main {
    width: 600px;
    border-radius: 12px 12px 0px 0px;

}

.good-page-photo-small {
    width: 180px;
    padding: 10px;
    border-radius: 25px;
}

.good-page-info-name {
    color: #283136;
    padding: 20px;
}

.good-page-info-back-button {
    display: block;
    position: relative;
    margin-left: 20px;
    border: 2px solid #739e0c;
    border-radius: 5px;
    width: 190px;
    margin-top: 20px;
    padding-left: 25px;
}

.good-page-info-back-button::before {
    position: absolute;
    top: 0px;
    left: 2px;
    overflow: hidden;
    content: '';
    width: 22px;
    height: 22px;
    background: url(../assets/back-arrow_icon.svg);
}

.good-page-info-back-button-link {
    text-decoration: none;
    color: #739e0c;
    font-weight: 900;
}

.good-page-info-price {
    font-size: 22px;
    font-weight: bold;
    margin-left: 20px;
}

.good-page-info-rating {
    font-size: 20px;
    font-weight: bold;
    padding: 20px;
}

.good-page-button-block {
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-top: 100px;
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
	background-color: #830A56;
	color: rgba(255, 255, 255, 0.3);
	box-shadow: 0 3px rgba(0, 0, 0, 0.1) inset;
}

.button-add_to_cart {
    margin-bottom: 20px;
}

.good-page-description {
   
    margin-left: 20px;
    margin-top: 20px;
    border: 2px solid #739e0c;
    border-radius: 15px;
    padding: 10px;
    font-weight: 500;
}

.good-page-description-header {
    margin: 0;
    padding: 0;
}

.good-page-feedback {
    border: 2px solid #739e0c;
    border-radius: 15px;
    margin: 20px;
    margin-right: 0px;  
    padding: 10px;
}

.good-page-feedback-header {
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
}
</style>