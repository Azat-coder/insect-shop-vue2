<template>
    <div>
        <router-view />
    </div>
</template>

<script>
export default {
    computed: {
        error() {
            return this.$store.getters.error
        }
    },
    watch: {
        error(fbError) {
            console.log(fbError)
            alert(fbError.message)          
        }
    }
}
</script>