<template>
  <nav class="navbar__wrapper">
    <ul class="navbar__link-list">
      <li class="navbar__link">
        <router-link to="/">Главная</router-link>
      </li>
      <li class="navbar__link">
        <router-link to="/history">История</router-link>
      </li>
    </ul> 
  </nav>
</template>

<style scoped>
.navbar__wrapper {
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  opacity: 1;
  margin: 0;
}
.navbar__link-list {
  margin: 0;
  padding: 0;
}
</style>