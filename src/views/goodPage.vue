<template>
    <div class="goodPage">
        <h1 class="visually-hidden">Страница товара{{goodIndex}}</h1>
        <div class="good-page-top-block">
            <div class="good-page-info">
                <h2>{{good.name}}</h2> 
                <p class="good-page-info-price">{{good.price}} руб.</p>
                <p class="good-page-info-rating">Рейтинг товара: {{good.rating}}</p>
                <div class="button-block">
                    <button class="button" @click="addToCart(good)">В корзину</button>
                    <button class="button" @click="addToWishlist(good)">Добавить в Мои желания</button>
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
                <router-link to="">
                    <img 
                        class="good-page-photo-small"
                        :src="hoverImageURL"
                        alt="Фото товара 2"
                    >
                </router-link>
                <router-link to="">
                    <img 
                        class="good-page-photo-small"
                        :src="image3URL"
                        alt="Фото товара 3"
                    >
                </router-link> 
                <router-link to=""> 
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
                <h3>Описание</h3>
                <p>{{GOODS[goodIndex-1].description}}</p>
            </div>
            <div class="good-page-feedback">
                <container/>
                <comment-form/>
                <h3>Отзывы</h3>
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
        },
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
        }
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
    border: 2px solid #d4d4d4;
    width: 600px;
}

.good-page-photo-main {
    width: 600px;
}

.good-page-photo-small {
    width: 180px;
    padding: 10px;
}

.good-page-info-price {
    font-size: 22px;
    font-weight: bold;
}

.good-page-info-rating {
    font-size: 20px;
    font-weight: bold;
}
</style>