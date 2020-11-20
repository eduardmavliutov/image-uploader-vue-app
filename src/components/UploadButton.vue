<template>
<div>
  <label 
    class="picture-upload__label"
    for="picture-upload__input"
  >
  <span class="picture-upload__text">Загрузить</span>
  </label>
  <input 
    type="file"
    name="files[]"
    id="picture-upload__input"
    class="picture-upload__input"
    accept=".jpg, .jpeg, .png"
  >
</div>
</template>

<style scoped>
.picture-upload__input {
  opacity: 0;
  position: absolute;
  z-index: -1;
  overflow: hidden;
  width: 0.4px;
  height: 0.4px;
}

.picture-upload__label {  
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

.picture-upload__text {
  padding: 9px 47px 8px 46px;
}
</style>