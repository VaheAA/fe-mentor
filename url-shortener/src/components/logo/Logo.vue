<template>
  <RouterLink class="logo" to="/">
    <img src="@/assets/images/logo-light.svg" alt="" v-if="type === 'light'">
    <img src="@/assets/images/logo.svg" alt="" v-else>
  </RouterLink>
</template>

<script setup lang="ts">

defineProps({
  type: String
})


</script>

<style lang="scss" scoped>
.logo {
  display: block;

  img {
    display: block;
  }
}
</style>