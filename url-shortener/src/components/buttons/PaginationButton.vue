<template>
  <button class="pagination-btn"
    :class="{ 'pagination-btn--next': direction === 'right', 'pagination-btn--prev': direction === 'left' }"
    @click="click" type="button">
    <span>{{ btnText }}</span>
    <font-awesome-icon :icon="`fa-solid fa-arrow-circle-${direction}`" />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  direction: string;
  btnText: string;
}>();

const emit = defineEmits(['click']);

function click(): void {
  emit('click');
}
</script>

<style scoped lang="scss">
.pagination-btn {
  cursor: pointer;
  background-color: transparent;
  border: 1px solid var(--color-grayish-violet-transparent);
  padding-inline: 1rem;
  padding-block: .75rem;
  min-width: 5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.8rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in;

  &:hover {
    box-shadow: 0px 12px 18px rgba(0, 0, 0, 0.2);

  }

  &--next {
    flex-direction: row;
  }

  &--prev {
    flex-direction: row-reverse;
  }
}
</style>