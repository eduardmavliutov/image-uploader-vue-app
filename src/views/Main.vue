<template>
<section class="section__wrapper border__wrapper">
  <h1 class="section__title">Главная</h1>
  <main class="section__main">
    <div class="image-upload__container">
      <img 
        v-if="!!lastUploadedImageUrl"
        class="image-upload__preview"
        v-bind:src="lastUploadedImageUrl"
      >
      <ImagePlaceHolder v-else/>
      <UploadButton
        @upload="uploadImageHandler"
      />
    </div>
  </main>
</section>
  
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import UploadButton from './../components/UploadButton.vue';
import ImagePlaceHolder from './../components/ImagePlaceHolder.vue';
import { mapGetters, mapMutations } from 'vuex';

@Component({
  components: {
    UploadButton,
    ImagePlaceHolder
  },

  computed: mapGetters(['lastUploadedImageUrl']),
  
  methods: {
    ...mapMutations([
      'uploadImage',
      'setLastUploadedImageUrl'
    ]),
  }
})
export default class Main extends Vue {
  uploadImage!: (url: string) => void;
  setLastUploadedImageUrl!: (src: string) => void
  
  uploadImageHandler(file: Blob): void {
    const onImageLoad = () => {
      this.uploadImage(String(fileReader.result));
      this.setLastUploadedImageUrl(String(fileReader.result));
      fileReader.removeEventListener('load', onImageLoad);
    };
    const fileReader = new FileReader();
    fileReader.addEventListener('load', onImageLoad);
    fileReader.readAsDataURL(file);
  }
}
</script>

<style scoped>
.image-upload__container {
  width: 50%;
  max-height: 100%;
  position: relative;
}

.image-upload__preview {
  background: transparent linear-gradient(180deg, #D29EF8 0%, #00CED6 100%) 0% 0% repeat padding-box;
  flex-grow: 2;
  max-width: 100%;
  max-height: 30rem;
  margin-bottom: 40px;
  object-fit: contain;
  text-align: center;
}
</style>

