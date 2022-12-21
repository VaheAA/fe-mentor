<template>
  <RouterLink class="btn btn-text" :to="href" :class="{ 'btn--centered': centered }">
    {{ btnText }}
  </RouterLink>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

defineProps<{
  btnText: string,
  href: RouteLocationRaw,
  centered?: boolean,
}>();

</script>

<style scoped lang="scss">
.btn {

  &-text {
    color: var(--color-grayish-violet);
    transition: all 0.3s ease;

    &:hover {
      color: var(--color-very-dark-violet);
    }
  }

  &--centered {
    margin-inline: auto;
  }

}
</style>