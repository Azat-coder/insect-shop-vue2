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
        <button type="submit">Отправить</button>
    </form>
</template>

<script>
    import firebase from 'firebase/app'
    export default {
        name: "CommentForm",
        data() {
            return {
                imageData: null,
                picture: null,
                uploadValue: 0,
                userName: '',
                commentText: ''
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
                    userName: this.userName,
                    commentText: this.commentText,
                    attachedFiles: this.imageData.name
                })
                this.picture = null
                this.$store.dispatch('uploadImage', this.imageData)
                
            }
        }
    }
</script>

<style scoped>

</style>