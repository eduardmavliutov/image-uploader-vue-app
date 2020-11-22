<template>
<div>
  <label 
    class="image-upload__label"
    for="image-upload__input"
  >
  <span class="image-upload__text">Загрузить</span>
  </label>
  <input 
    type="file"
    id="image-upload__input"
    ref="file"
    class="image-upload__input"
    accept=".jpg, .jpeg, .png"
    @change="$emit('upload', $refs.file.files[0])"
  >
</div>
</template>

<style scoped>
.image-upload__input {
  opacity: 0;
  position: absolute;
  z-index: -1;
  overflow: hidden;
  width: 0.4px;
  height: 0.4px;
}

.image-upload__label {  
  background: #006896 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 2px #0000003D;
  border-radius: 2px;
  opacity: 1;
  text-align: left;
  font: inherit;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
}

.image-upload__text {
  padding: 9px 47px 8px 46px;
}
</style>