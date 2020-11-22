<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
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
  padding-top: 79px;
  margin-bottom: 29px;
  position: relative;
  flex-grow: 1;
}

.section__title {
  align-self: flex-start;
  padding: 0;
  margin: 0 30px 0;
}

.section__main {
  display: flex;
  justify-content: flex-start;
  flex-flow: row nowrap;
  align-items: flex-start;
  flex-grow: 2;
  margin-right: 30px;
}
</style>
