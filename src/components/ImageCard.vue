<template>
  <div class="image-card__wrapper">
    <img 
    class="image-card__image"
      v-bind:data-id="id"
      v-bind:src="src"
      v-bind:alt="title"
    >
    <div class="image-card__description">
      <p class="image-card__description-title"><strong>{{ title }}</strong></p>
      <time 
        v-bind:date="new Date(timestamp).toLocaleString()" 
        class="image-card__description-timestamp">
        {{ formatDate(timestamp) }}
      </time>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    title: String,
    timestamp: {
      type: [String, Number]
    },
    src: String,
    id: {
      type: [String, Number]
    }
  },
  methods: {
    formatDate(timestamp) {
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

.image-card__image {
  max-width: 200px;
  max-height: 100px;
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