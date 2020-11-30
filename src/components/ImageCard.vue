<template>
  <div class="image-card__wrapper">
    <div class="image-card__image-container">
      <img 
        class="image-card__image"
        :data-id="id"
        :src="src"
        :alt="title"
      >
      <div class="image-card__delete-image-button-container">
        <img 
          class="image-card__delete-image-button"
          src="../assets/trash-icon.png"
          v-on:click="$emit('delete', id)"
        >
      </div>
    </div>
    <div class="image-card__description">
      <p class="image-card__description-title"><strong>{{ title }}</strong></p>
      <time 
        :date="timestamp" 
        class="image-card__description-timestamp"
      >{{ timestamp }}
      </time>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ImageCard',
  props: {
    title: String,
    timestamp: String,
    src: String,
    id: String
  },
}
</script>

<style scoped>
.image-card__wrapper {
  display: flex;
  justify-content: flex-start;
  flex-flow: row nowrap;
  align-items: flex-start;
  margin-bottom: 30px;
  box-shadow: 0 0 5px 5px lightgray;
  background: #ffffff;
  padding: 1rem;
  width: 100%;
}

.image-card__image-container {
  position: relative;
  max-width: 200px;
  max-height: 100px;
}

.image-card__image {
  max-width: 100%;
  max-height: 100px;
}

.image-card__delete-image-button-container {
  position: absolute;
  top: 75%;
  right: 0;
}

.image-card__delete-image-button {
  width: 1.5rem;
  transition: all 0.2s ease-in;
}

.image-card__delete-image-button:hover {
  filter: invert(100%);
}

.image-card__delete-image-button:active {
  filter: invert(50%);
}

.image-card__description {
  text-align: left;
  font: normal normal normal 22px Roboto;
  color: #707070;
  opacity: 1;
  display: flex;
  justify-content: flex-start;
  flex-flow: column nowrap;
  align-items: flex-start;
  margin-left: 27px;
}

.image-card__description-title,
.image-card__description-timestamp {
  margin: 0;
}

.image-card__description-timestamp {
  padding-top: 5px;
}
</style>