<template>
  <div class="spinner__container">
    <div class="spinner"></div>
  </div>
</template>


<style lang="scss" scoped>
.spinner__container {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba($color: #000000, $alpha: .1);
}

.spinner {
  display: block;
  width: 40px;
  height: 40px;
  margin: -35px 0 0 -35px;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: #2ed3c5;
  animation: spin 1s ease infinite;
  position: absolute;
  top: 50%;
  left: 50%;
}

@keyframes spin {
  to {
    -webkit-transform: rotateZ(360deg);
  }
}
</style>