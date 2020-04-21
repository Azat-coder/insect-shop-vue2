<template>
    <div class="photoshow-container">
        <div class="photoShow">
            <div class="little-photo-block">
                <img 
                    class="good-page-photo-little"
                    :src="imageURL"
                    alt="Фото товара 1"
                    @click="photoClick1"
                >
                <img 
                    class="good-page-photo-little"
                    :src="hoverImageURL"
                    alt="Фото товара 2"
                    @click="photoClick2"
                >
                <img 
                    class="good-page-photo-little"
                    :src="image3URL"
                    alt="Фото товара 3"
                    @click="photoClick3"
                >
                <img 
                    class="good-page-photo-little"
                    :src="image4URL"
                    alt="Фото товара 4"
                    @click="photoClick4"
                >
            </div>
            <div class="photo-block">
                <img 
                    class="good-page-photo-main good-page-photo-main-1"
                    :src="imageURL"
                    alt="Фото товара 1"
                >
                <img 
                    class="good-page-photo-main good-page-photo-main-2"
                    :src="hoverImageURL"
                    alt="Фото товара 2"
                >
                <img 
                    class="good-page-photo-main good-page-photo-main-3"
                    :src="image3URL"
                    alt="Фото товара 3"
                >
                <img 
                    class="good-page-photo-main good-page-photo-main-4"
                    :src="image4URL"
                    alt="Фото товара 4"
                >
            </div> 
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
    methods: {
        photoClick1() {
            let elem1 = document.querySelector(".good-page-photo-main-1")
            let elem2 = document.querySelector(".good-page-photo-main-2")
            let elem3 = document.querySelector(".good-page-photo-main-3")
            let elem4 = document.querySelector(".good-page-photo-main-4")
                elem2.style.zIndex = 1;
                elem3.style.zIndex = 1;
                elem4.style.zIndex = 1;
                elem1.style.zIndex = 100;
        },
        photoClick2() {
             let elem1 = document.querySelector(".good-page-photo-main-1")
            let elem2 = document.querySelector(".good-page-photo-main-2")
            let elem3 = document.querySelector(".good-page-photo-main-3")
            let elem4 = document.querySelector(".good-page-photo-main-4")
                elem1.style.zIndex = 1;
                elem3.style.zIndex = 1;
                elem4.style.zIndex = 1;
                elem2.style.zIndex = 100;
        },
        photoClick3() {
             let elem1 = document.querySelector(".good-page-photo-main-1")
            let elem2 = document.querySelector(".good-page-photo-main-2")
            let elem3 = document.querySelector(".good-page-photo-main-3")
            let elem4 = document.querySelector(".good-page-photo-main-4")
                elem2.style.zIndex = 1;
                elem1.style.zIndex = 1;
                elem4.style.zIndex = 1;
                elem3.style.zIndex = 100;
        },
        photoClick4() {
            let elem1 = document.querySelector(".good-page-photo-main-1")
            let elem2 = document.querySelector(".good-page-photo-main-2")
            let elem3 = document.querySelector(".good-page-photo-main-3")
            let elem4 = document.querySelector(".good-page-photo-main-4")
                elem2.style.zIndex = 1;
                elem3.style.zIndex = 1;
                elem1.style.zIndex = 1;
                elem4.style.zIndex = 100;
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
.photoshow-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.photoShow {
    display: flex;
    margin-top: 20px;
}

.little-photo-block {
   display: flex;
   flex-direction: column;
   width: 200px;
   height: 600px;
   align-items: center;
   justify-content: space-around;
}

.good-page-photo-little {
    width: 120px;
    border-radius: 5px;
    border: 2px solid #739e0c;
}

.photo-block {
    position: relative;
    width: 900px;
}

.good-page-photo-main {
    position: absolute;
    width: 900px; 
    border-radius: 15px;
    border: 2px solid #739e0c;
}
.good-page-photo-main-1 {
    z-index: 2;
}
</style>