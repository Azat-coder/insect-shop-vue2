<template>
    <div class="comment">
        <div class="comment-image-container">
            <img 
            :src="imageURL"
        >
        </div>
        <div class="comment-info">
            <p class="comment-name">
                <span>Имя пользователя:</span>  {{comment.userName}}
            </p>
            <p class="comment-text">
                <span>Текст комментария:</span>  {{comment.commentText}}
            </p>
        </div>
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
    width: 60px;
}

.comment {
    display: flex; 

}

.comment-info {
    display: flex;
    flex-direction: column;
}

.comment-name {
    margin: 0;
    margin-left: 20px;
}

.comment-text {
    margin: 0;
    margin-left: 20px;
}

.comment-name span,
.comment-text span {
    font-weight: 500;
}

</style>