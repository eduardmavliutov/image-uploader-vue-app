<template>
  <nav class="navbar__wrapper">
    <ul class="navbar__link-list">
      <li class="navbar__item">
        <router-link 
          active-class="navbar__link_active"
          class="navbar__link" 
          to="/"
          exact
        >
          Главная
        </router-link>
      </li>
      <li class="navbar__item">
        <router-link 
          active-class="navbar__link_active" 
          class="navbar__link" 
          to="/history"
        >
          История
        </router-link>
      </li>
    </ul> 
  </nav>
</template>

<style scoped>
@keyframes underline {
  0% {
    border-width: 10px;
  }
  100% {
    border-width: 2px;
  }
}

.navbar__wrapper {
  background: linear-gradient(to left, #D29EF8 0%, #00CED6 100%);
  box-shadow: 0 0 5px 5px gray;
  opacity: 1;
  padding: 0;
  z-index: 1;
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
  padding: 20px;
  transition: all .3s ease-in-out;
}

.navbar__link {
  color: #ffffff;
  font-weight: bold;
  animation-fill-mode: forwards;
  animation-duration: .4s;
}

.navbar__link_active {
  border-bottom: 2px solid #ffffff;
  animation-name: underline;
}

.navbar__item:hover {
  background: rgba(211, 211, 211, 0.603);
}
</style>