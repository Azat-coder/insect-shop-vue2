<template>
    <div class="goodPage">
        <h1 class="visually-hidden">Страница товара{{goodIndex}}</h1>
        <div class="good-page-top-block">
            <div class="good-page-info">
                <h2>{{GOODS[goodIndex-1].name}}</h2> 
            </div>
            <div class="good-page-photo">
                <router-link to="/photoShow">
                    <img 
                    class="good-page-photo-main"
                    :src="require(`../images/${GOODS[goodIndex-1].image}.jpg`)"
                    alt=""
                    >
                </router-link>
                <router-link to="">
                    <img 
                    class="good-page-photo-small"
                    :src="require(`../images/${GOODS[goodIndex-1].hoverImage}.jpg`)"
                    alt=""
                    >
                </router-link>
                <router-link to="">
                    <img 
                    class="good-page-photo-small"
                    :src="require(`../images/${GOODS[goodIndex-1].image_3}.jpg`)"
                    alt=""
                    >
                </router-link> 
                <router-link to=""> 
                    <img 
                    class="good-page-photo-small"
                    :src="require(`../images/${GOODS[goodIndex-1].image_4}.jpg`)"
                    alt=""
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
import {mapGetters} from 'vuex'

export default {
    components: {
        container,
        commentForm
    },
    computed: {
    ...mapGetters([
      'GOODS'
    ]),
    goodIndex() {
        return this.$route.params.index
    },
    // photoShowLink() {
    //     return `/photoShow/${this.GOODS[goodIndex-1]}`
    // }
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


</style>