<template>
<section class="section">
  <h1 class="section__title">Главная</h1>
  <main class="section__main">
    <div class="picture-upload__preview">

    </div>
    <UploadButton/>
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

.section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row nowrap;
}

.section__title {
  align-self: flex-start;
}

.picture-upload__preview {
  top: 212px;
  left: 255px;
  width: 453px;
  height: 252px;
  background: transparent linear-gradient(180deg, #D29EF8 0%, #00CED6 100%) 0% 0% no-repeat padding-box;
  opacity: 1;
}

</style>

