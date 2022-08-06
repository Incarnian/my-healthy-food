<template>
  <div>
    <HeaderNav/>
    <router-view/>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'


import '../styles/global.css'
export default {
  name: 'App',
  components: {
   HeaderNav,
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(239,255,239,1) 0%, rgba(255,255,255,1) 100%);
}
</style>
