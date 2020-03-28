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

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
</style>


