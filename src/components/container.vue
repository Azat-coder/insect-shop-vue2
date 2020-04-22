<template>
    <div class="container">
        <comment 
            class="comment"
            v-for="comment in comments"
            :comment="comment"
            :key="comment.id"
        >
        </comment>       
    </div>   
</template>

<script>
import firebase from 'firebase/app'
import comment from '@/components/comment.vue'

export default {
    name: "container",
    watch: {
        imageUploaded() {
            let uploaded = this.$store.getters.uploaded;
            this.getComments()
            this.$store.commit('reloaded')
            return uploaded
        }
    },
    data() {
        return {
            images: [],
            imageUploaded: false,
            comments: []
        }
    },
    methods: {
        async getComments() {
            firebase.database().ref(`goods/${this.goodIndex-1}/comments`).once('value').then(comments => {
                this.comments = comments.val()
            })
        }
    },
    mounted() {
        let commentRef = firebase.database().ref(`goods/${this.goodIndex-1}/comments`);
        commentRef.on('value', () => {
            this.getComments()
        })
    },
    components: {
        comment
    },
    computed: {
            goodIndex() {
                return this.$route.params.index
            }
        }
}
</script>


