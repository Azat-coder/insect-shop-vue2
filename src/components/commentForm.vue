<template>
    <div>
        <form v-if="this.userMail"
            class="comment-form"
            @submit.prevent="onUpload">
            <h2>Написать отзыв</h2>
            <label> Имя * 
                <input 
                    class="comment-form-name"
                    type="text"
                    v-model="userMail"
                >
            </label>
            <label for="commentText">Ваш отзыв: *</label>
            <textarea 
                class="comment-form-text"
                name="comment" 
                id="commentText" 
                cols="30" 
                rows="6"
                v-model="commentText"
            >
            </textarea> 
            <div class="comment-text-bottom-block">
                <div 
                class="goods-rating">
                    <p>Оценка *</p>
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
                </div>
                <div class="input__wrapper">
                    <input 
                        name="file" 
                        type="file"
                        ref="file" 
                        id="input__file" 
                        accept="image/png"
                        class="input input__file"
                        @change="uploadImage" 
                        multiple>
                    <label 
                        for="input__file" 
                        class="input__file-button">
                        <span class="input__file-icon-wrapper">
                            <img 
                                class="input__file-icon" 
                                src="../assets/logo.svg" 
                                alt="Выбрать файл" 
                                width="25">
                        </span>
                        <span class="input__file-button-text">Выберите файл</span>
                    </label>
                </div>
                <button
                    class="button comment-form-button" 
                    type="submit">
                    Отправить
                </button>
            </div>      
        </form>
    <div
        class="comment-form-registered"
        v-else
        >
        Отзывы о товарах могут оставлять только зарегистрированные пользователи
    </div>
</div>
    
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
                rating: 0,
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
                firebase.database().ref(`goods/${this.goodIndex-1}/comments/` + id).set({
                    id,
                    uid: this.uid,
                    userName: this.userMail,
                    commentText: this.commentText,
                    attachedFiles: this.imageData.name,
                    rating: this.rating    
                })
                this.picture = null
                this.userName = ''
                this.commentText = ''
                this.rating = 0
                this.$store.dispatch('uploadImage', this.imageData)
            }
        },
        computed: {
            ...mapGetters([
                'uid',
                'info'
            ]),
            goodIndex() {
                return this.$route.params.index
            },
            userMail() {
                return this.info.email
        }
        }
}
</script>

<style scoped>
.comment-form { 
    display: flex;
    flex-direction: column;
}

.comment-form-name {
    width: 100%;
    font: inherit;
}

.comment-form-text {
    width: 100%;
    margin-bottom: 20px;
    font: inherit;
}

.comment-text-bottom-block {
    display: flex;
    align-items: center;
}

.goods-rating {
    margin-left: 20px;
    margin-bottom: 20px;
}

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
  background: url(../assets/rating.png) no-repeat 50% 0;
  cursor: pointer;
}

.rating_block .label_rating:hover, 
.rating_block .label_rating:hover ~ .label_rating, 
.rating_block input[type="radio"]:checked ~ .label_rating 
{
  background-position: 50% -25px;
}

.input__wrapper {
  width: 100%;
  position: relative;
  margin: 15px 0;
  text-align: center;
}
 
.input__file {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}
 
.input__file-icon-wrapper {
  height: 60px;
  width: 60px;
  margin-right: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  border-right: 1px solid #fff;
}
 
.input__file-button-text {
  line-height: 1;
  margin-top: 1px;
}
 
.input__file-button {
  width: 100%;
  max-width: 290px;
  height: 60px;
  background: #739e0c;
  color: #fff;
  font-size: 1.125rem;
  font-weight: 700;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  border-radius: 3px;
  cursor: pointer;
  margin: 0 auto;
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

.comment-form-button {
    margin-right: 20px;
}

.comment-form-registered {
    font-style: italic;
    margin-top: 20px;
}
</style>