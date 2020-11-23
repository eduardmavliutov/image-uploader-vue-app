<template>
  <div class="image-card__wrapper">
    <div class="image-card__image-container">
      <img 
        class="image-card__image"
        v-bind:data-id="id"
        v-bind:src="src"
        v-bind:alt="title"
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
        v-bind:date="new Date(timestamp).toLocaleString()" 
        class="image-card__description-timestamp"
      >{{ formatDate(timestamp) }}
      </time>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ImageCard',
  props: {
    title: String,
    timestamp: Number,
    src: String,
    id: String
  },
  methods: {
    formatDate(timestamp:number): string {
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
  }
}
</script>

<style scoped>
.image-card__wrapper {
  display: flex;
  justify-content: flex-start;
  flex-flow: row nowrap;
  align-items: flex-start;
  margin-bottom: 30px;
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
  width: fit-content;
  height: fit-content;
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