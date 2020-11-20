<template>
  <section>
    <h1>История</h1>
    <div class="pictures-history__container">
      <img 
        v-for="image in images" :key="image.id"
        v-bind:image="image"
        :src="image.src" 
        :alt="image.alt"
      >
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'History',
  computed: mapGetters(['images']),
  methods: mapActions(['fetchImages']),
  async mounted() {
    this.fetchImages();
  }
}

</script>