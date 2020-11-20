<template>
  <section>
    <h1>История</h1>
    <Loader v-if="loading"/>
    <div 
      v-else
      class="pictures-history__container"
    >
      <img 
        v-for="image in images" :key="image.id + Date.now()"
        v-bind:image="image"
        :src="image.src" 
        :alt="image.title"
      >
    </div>
    
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Loader from '@/components/Loader';

export default {
  name: 'History',
  components: {
    Loader
  },
  computed: mapGetters(['images', 'loading']),
  methods: mapActions(['fetchImages']),
  async mounted() {
    this.fetchImages();
  }
}
</script>