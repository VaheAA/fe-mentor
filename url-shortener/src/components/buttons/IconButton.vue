<template>
  <button @click="click" class="icon-btn" :class="{'icon-btn--delete': icon === 'times'}">
    <font-awesome-icon :icon="`fa-solid fa-${icon}`" />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
}>();

const emit = defineEmits(['click']);

function click(): void {
  emit('click');
}
</script>

<style scoped lang="scss">
.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in;
  color: var(--color-very-dark-blue);
  font-size: 1.8rem;

  &--delete {
    color: var(--color-red);
  }

  &:hover {
    color: var(--color-cyan);
  }
}
</style>