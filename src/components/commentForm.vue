<template>
    <form @submit.prevent="onUpload">
        <label for="commentText">Текст комментария</label>
        <textarea 
            name="comment" 
            id="commentText" 
            cols="30" 
            rows="10"
            v-model="commentText"
        >
        </textarea>
        <label> Имя
            <input 
                type="text"
                v-model="userName"
            >
        </label> 
        <input 
            name="myFile" 
            ref="file" 
            accept="image/png" 
            @change="uploadImage" 
            type="file"
        >
        <div class="rating_block">
            <input 
                name="rating" 
                value="5" 
                id="rating_5" 
                type="radio"
                v-model.number="rating" 
            />
            <label 
                for="rating_5" 
                class="label_rating">
            </label>
            
            <input 
                name="rating" 
                value="4" 
                id="rating_4" 
                type="radio"
                v-model.number="rating" 
            />
            <label 
                for="rating_4" 
                class="label_rating">
            </label>
            
            <input 
                name="rating" 
                value="3" 
                id="rating_3" 
                type="radio"
                v-model.number="rating" 
            />
            <label 
                for="rating_3" 
                class="label_rating">
            </label>
            
            <input 
                name="rating" 
                value="2" 
                id="rating_2" 
                type="radio"
                v-model.number="rating" 
            />
            <label 
                for="rating_2" 
                class="label_rating">
            </label>
            
            <input 
                name="rating" 
                value="1" 
                id="rating_1" 
                type="radio"
                v-model.number="rating" 
            />
            <label 
                for="rating_1" 
                class="label_rating">
            </label>
        </div>
        <button type="submit">Отправить</button>
    </form>
</template>

<script>
    import firebase from 'firebase/app'
    import { mapGetters } from 'vuex'

    export default {
        name: "CommentForm",
        data() {
            return {
                imageData: null,
                picture: null,
                uploadValue: 0,
                userName: '',
                commentText: '',
                rating: 0
            }
        },
        methods: {
            uploadImage(event) {
                this.uploadValue = 0;
                this.picture = null;
                this.imageData = event.target.files[0];
            },
            onUpload() {
                let id = Date.now()
                firebase.database().ref('comments/' + id).set({
                    id,
                    uid: this.uid,
                    userName: this.userName,
                    commentText: this.commentText,
                    attachedFiles: this.imageData.name,
                    rating: this.rating
                })
                this.picture = null

                this.$store.dispatch('uploadImage', this.imageData)
                
                // firebase.database().ref('goods/' + goodId + ).set({
                //     rating: this.ratingValue
                // })
            }
        },
        computed: {
        ...mapGetters([
            'uid'
        ])
       
    }
    }
</script>

<style scoped>
.rating_block {
  width: 125px;
  height: 25px;
}
.rating_block input[type="radio"] {
  display: none;
}
.label_rating {
  float: right;
  display: block;
  width: 25px;
  height: 25px;
  background: url(../images/rating.png) no-repeat 50% 0;
  cursor: pointer;
}
/*Пишем правила смены положения background-а*/
.rating_block .label_rating:hover, /*Правило для ховера на текущий лейбл*/
.rating_block .label_rating:hover ~ .label_rating, /*Правило для всех следующих лейблов по DOM дереву*/
.rating_block input[type="radio"]:checked ~ .label_rating /*Правило для всех следующих лейблов после выбранного инпута, чтобы звездочки как бы зафиксировались*/
{
  background-position: 50% -25px;
}
</style>