<template>
<section class="section__wrapper border__wrapper">
  <h1 class="section__title">Главная</h1>
  <main class="section__main">
    <div class="image-upload">
      <div class="image-upload__preview">
      </div>
      <UploadButton/>
    </div>
  </main>
</section>
  
</template>

<script>
import UploadButton from '@/components/UploadButton'
export default {
  name: 'Main',
  components: {
    UploadButton
  }
}
</script>

<style scoped>
.image-upload__preview {
  top: 212px;
  left: 255px;
  width: 453px;
  height: 252px;
  background: transparent linear-gradient(180deg, #D29EF8 0%, #00CED6 100%) 0% 0% no-repeat padding-box;
  opacity: 1;
  flex-grow: 2;
}
</style>

