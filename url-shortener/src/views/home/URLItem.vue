<template>
  <div class="url">
    <span class="url__long">{{ urlLong }}</span>
    <span class="url__short">{{ urlShort }}</span>
    <MainButton font-size="1.6rem" btn-text="Copy" type="button" :btn-submit="true" as="button" @click="copy" />
  </div>
</template>

<script setup lang="ts">
import MainButton from '@/components/buttons/MainButton.vue';

defineProps({
  urlLong: String,
  urlShort: String
});

const emit = defineEmits(['copy']);

function copy(): void {
  emit('copy');
}


</script>

<style scoped lang="scss">
.url {
  padding: 2.2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 10rem;
  position: relative;
  z-index: 1;
  background-color: var(--color-white);
  box-shadow: 1px 2px 1px rgba($color: #000000, $alpha: 0.1);

  @media (max-width: 728px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    align-items: flex-start;
  }

  &:not(:last-of-type) {
    margin-bottom: 1.5rem;
  }

  &__long {
    color: var(--color-very-dark-violet);
    font-size: 1.7rem;
    display: block;
    width: 100%;

    @media (max-width: 728px) {
      border-bottom: 1px solid var(--color-grayish-violet);
      padding-bottom: 1rem;
    }
  }

  &__short {
    color: var(--color-cyan);
    font-size: 1.7rem;
    display: block;
    width: max-content;
    margin-left: auto;


    @media (max-width: 728px) {
      margin-left: 0;
    }
  }
}
</style>