<template>
  <nav class="navbar__wrapper border__wrapper">
    <ul class="navbar__link-list">
      <li class="navbar__item">
        <router-link to="/">Главная</router-link>
      </li>
      <li class="navbar__item">
        <router-link to="/history">История</router-link>
      </li>
    </ul> 
  </nav>
</template>

<style scoped>
.navbar__wrapper {
  background: #FFFFFF 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-top: 29px;
  margin-bottom: 40px;
  padding: 0;
}

.navbar__link-list {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  flex-flow: row nowrap;
  list-style: none;
}

.navbar__item {
  margin: 20px;
}
</style>