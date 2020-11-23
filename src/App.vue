<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Roboto, Avenir, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#000000;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-flow: column nowrap;
  height: 100vh;
}

.border__wrapper {
  border: 1px solid #707070;
  margin-left: 48px;
  margin-right: 48px;
}

.section__wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: row nowrap;
  padding: 79px 0px;
  margin-bottom: 29px;
  flex-grow: 1;
  position: relative;
}

.section__title {
  align-self: flex-start;
  padding: 0;
  margin: 0 30px 0;
  position: absolute;
}

.section__main {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-items: flex-start;
  flex-grow: 2;
  position: relative;
}
</style>
