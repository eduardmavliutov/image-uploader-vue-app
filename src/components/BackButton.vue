<template>
  <div class="back-button__container">
    <router-link to="/">
    <img 
      class="back-button__image"
      src="../assets/back-arrow.png"
    >
    </router-link>
  </div>
</template>

<style scoped> 
@keyframes back-arrow-move {
  100% {
    transform: scale(1.1) translateX(-5%);
  }
}

.back-button__container {
  width: 2rem;
  margin-right: 0.2rem;
  z-index: 3;
}

.back-button__image {
  width: 100%;
  transition: all 0.3s ease-in;
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
}

.back-button__image:hover {
  filter: invert(100%);
  animation-name: back-arrow-move;
}

.back-button__image:active {
  filter: invert(50%);
  animation-name: back-arrow-move;
}
</style>
  
