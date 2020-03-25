<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import emptyLayout from '@/layouts/emptyLayout'
import mainLayout from '@/layouts/mainLayout'

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  },
  components: {
    emptyLayout,
    mainLayout
  }
}
</script>

<style>
body {
	margin: 0;
	padding: 0;
	font-family: "Roboto", Arial, sans-serif;
	font-size: 16px;
	line-height: 24px;
	font-weight: 400;
	color: #283136;
}
</style>