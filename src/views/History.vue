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
          :key="image.id"
          :image="image"
          :src="image.src"
          :title="image.title"
          :id="image.id"
          :timestamp="image.timestamp"
          @delete="deleteImage"
        />
      </div>
    </main>
  </section>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import Loader from './../components/Loader.vue';
import ImageCard from './../components/ImageCard.vue';
import BackButton from './../components/BackButton.vue';

@Component({
  computed: mapGetters([
    'images',
    'loading'
  ]),

  methods: {
    ...mapActions(['fetchImages']),
    ...mapMutations(['deleteImage'])
  },

  components: {
    Loader,
    ImageCard,
    BackButton
  },
})
export default class History extends Vue {
  images!: ImageData[];
  fetchImages!: () => Promise<void>
  
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