<template>
    <div class="photoShow">
        <div class="photo-block">
             <img 
                class="good-page-photo-main"
                :src="imageURL"
                alt="Фото товара 1"
            >
            <img 
                class="good-page-photo-main"
                :src="hoverImageURL"
                alt="Фото товара 2"
            >
            <img 
                class="good-page-photo-main"
                :src="image3URL"
                alt="Фото товара 3"
            >
            <img 
                class="good-page-photo-main"
                :src="image4URL"
                alt="Фото товара 4"
            >
        </div>        
    </div>
</template>

<script>
import firebase from 'firebase/app'
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            imageURL: '',
            hoverImageURL: '',
            image3URL: '',
            image4URL: ''
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
        }
    }
}
</script>

<style scoped>
.photo-block {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0b0b0b;
    opacity: 0.8;
}

img {
    width: 1200px;
}
</style>