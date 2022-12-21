<template>
  <div class="boost">
    <div class="container">
      <div class="boost__inner">
        <h2 class="title title--secondary title--light">Boost your links today
        </h2>
        <MainButton :btn-submit="false" btn-text="Get Started" font-size="2rem" type="button" as="link" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MainButton from '@/components/buttons/MainButton.vue';
</script>

<style scoped lang="scss">
.boost {
  background-image: url('@/assets/images/bg-shorten-desktop.svg');
  background-color: var(--color-very-dark-violet);
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  padding-block: 4rem;

  .title {
    margin-bottom: 3rem;
  }
}
</style>