<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    components: {
      HelloWorld
    },
    setup(){
      const ws = new WebSocket(`ws://${window.location.host}/kart/play`)
      ws.onerror = () => {console.log("error")}
    } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>