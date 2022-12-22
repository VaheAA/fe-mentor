<template>
  <div class="hero">
    <div class="container">
      <div class="hero__inner">
        <div class="hero__content">
          <h1 class="title">More than just shorter links
          </h1>
          <p class="description">Build your brand’s recognition and get detailed insights
            on how your links are performing.</p>
          <MainButton btn-text="Get Started" font-size="2rem" type="button" :btn-submit="false" as="button" />
        </div>
        <div class="hero__image">
          <img src="@/assets/images/illustration-working.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MainButton from '@/components/buttons/MainButton.vue';


</script>

<style scoped lang="scss">
.hero {
  position: relative;
  padding-block: 18rem;
  overflow: hidden;

  @media (max-width: 728px) {
    padding-block: 4rem;
    margin-bottom: 4rem;
  }

  &__inner {
    display: flex;
    align-items: center;

    @media (max-width: 728px) {
      flex-direction: column-reverse;
      gap: 3rem;
      text-align: center;

      .title {
        margin-bottom: 2rem;
      }
    }
  }

  &__content {
    width: min(100% - 2rem, 57rem);
  }

  &__image {
    position: absolute;
    right: -1rem;

    @media (max-width: 728px) {
      position: static;
    }

    img {
      display: block;
      width: 100%;
    }
  }
}
</style>