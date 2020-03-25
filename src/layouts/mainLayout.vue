<template>
    <div class="container">
      <div class="layout">
        <vueHeader/>
        <div class="main-container">
            <vueAside/>
            <main>
                
                    <router-view />
                        
            </main>      
        </div>
        <vueFooter/>
      </div>
    </div>
</template>

<script>
import header from '@/components/header.vue'
import footer from '@/components/footer.vue'
import aside from '@/components/aside.vue'

export default {
  data() {
    return {

    }
  },
  components: {
    vueHeader: header,
    vueFooter: footer,
    vueAside: aside
  }
}
</script>

<style scoped>
    .main-container {
        display: flex;
        /* flex-wrap: wrap; */
        flex-grow: 1; 
        max-width: 1200px;
        margin: 0 auto;   
    }

    .layout {
      /* max-width: 1200px; */
      /* margin: 0 auto; */
      height: 100vh; 
      display: flex;
      flex-direction: column;
    }
</style>