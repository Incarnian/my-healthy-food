<template>
  <div>
    <HeaderNav/>
    <HomeContent/>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import HomeContent from './components/HomeContent.vue'


import '../styles/global.css'
export default {
  name: 'App',
  components: {
    HeaderNav,
    HomeContent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
