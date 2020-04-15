<template>
    <div class="comment">
        <img 
            :src="imageURL"
        >
        <p class="comment-name">
            Имя пользователя: {{comment.userName}}
        </p>
        <p class="comment-text">
            Текст комментария: {{comment.commentText}}
        </p>
    </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
    name: "comment",
    props: ['comment'],
    data() {
        return {
            imageURL: ''
        }   
    },
    mounted() {
        firebase.storage().ref('commentImages').child(this.comment.attachedFiles).getDownloadURL().then(data =>{
            this.imageURL = data}
        )
}
}
</script>

<style scoped>
img {
    width: 100px;
}
</style>