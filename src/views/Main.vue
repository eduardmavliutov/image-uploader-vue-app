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

<script>
import UploadButton from '@/components/UploadButton';
import ImagePlaceHolder from '@/components/ImagePlaceHolder';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Main',
  components: {
    UploadButton,
    ImagePlaceHolder
  },
  computed: mapGetters(['lastUploadedImageUrl']),
  methods: {
    ...mapMutations(['uploadImage', 'setLastUploadedImageUrl']),
    uploadImageHandler(file) {
      const onImageLoad = () => {
        this.uploadImage(fileReader.result);
        this.setLastUploadedImageUrl(fileReader.result);
        fileReader.removeEventListener('load', onImageLoad);
      };
      const fileReader = new FileReader();
      fileReader.addEventListener('load', onImageLoad);
      fileReader.readAsDataURL(file);
    }
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

