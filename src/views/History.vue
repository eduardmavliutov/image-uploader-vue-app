<template>
  <section class="section__wrapper border__wrapper">
    <h1 class="section__title">
      <BackButton/>
      История
    </h1>
    <main class="section__main">
      <Loader v-if="loading"/>
      <div 
        v-else
        class="images-history__container"
      >
        <h2 v-if="images.length === 0">В истории нет записей :(</h2>
        <ImageCard 
          v-else
          v-for="image in images" 
          v-bind:image="image"
          v-bind:key="image.id"
          v-bind:src="image.src"
          v-bind:title="image.title"
          v-bind:id="image.id"
          v-bind:timestamp="image.timestamp"
          @delete="deleteImage"
        />
      </div>
    </main>
  </section>
</template>

<script lang="ts">
import { mapGetters, mapActions, mapMutations } from 'vuex';
import Loader from './../components/Loader.vue';
import ImageCard from './../components/ImageCard.vue';
import BackButton from './../components/BackButton.vue';

export default {
  name: 'History',
  components: {
    Loader,
    ImageCard,
    BackButton
  },
  computed: mapGetters(['images', 'loading']),
  methods: {
    ...mapActions(['fetchImages']),
    ...mapMutations(['deleteImage'])
  },
  mounted(): void {
    this.fetchImages();
  }
}
</script>

<style scoped>
.images-history__container {
  display: flex;
  justify-content: flex-start;
  flex-flow: column nowrap;
  align-items: flex-start;
}
</style>