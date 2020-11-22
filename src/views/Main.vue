<template>
<section class="section__wrapper border__wrapper">
  <h1 class="section__title">Главная</h1>
  <main class="section__main">
    <div class="image-upload__container">
      <img class="image-upload__preview">
      <UploadButton
        @upload="uploadImageHandler"
      />
    </div>
  </main>
</section>
  
</template>

<script>
import UploadButton from '@/components/UploadButton';
import { mapMutations } from 'vuex';

export default {
  name: 'Main',
  components: {
    UploadButton
  },
  methods: {
    ...mapMutations(['uploadImage']),
    uploadImageHandler(file) {
      const onImageLoad = () => {
        this.uploadImage(fileReader.result);
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
}

.image-upload__preview {
  top: 212px;
  left: 255px;
  width: 453px;
  height: 252px;
  background: transparent linear-gradient(180deg, #D29EF8 0%, #00CED6 100%) 0% 0% no-repeat padding-box;
  opacity: 1;
  flex-grow: 2;
  display: block;
  width: 100%;
  margin-bottom: 40px;
}
</style>

