<template>
  <button v-if="as === 'button'" class="btn btn-main" :class="{
    'btn-submit': btnSubmit, 'btn--centered': centered, 'btn--full': full
  }" @click="click" :type="type" :disabled="loading">

    {{ btnText }}
  </button>
  <RouterLink to="/register" v-if="as === 'link'" class="btn btn-main"
    :class="{ 'btn-submit': btnSubmit, 'btn--centered': centered, 'btn--full': full }">
    {{ btnText }}
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  btnText: string,
  fontSize: string,
  btnSubmit: boolean,
  loading?: boolean,
  as: string,
  href?: string,
  centered?: boolean,
  full?: boolean,
  type: 'submit' | 'reset' | 'button',
  isLoading?: boolean;
}>();

const emit = defineEmits(['click']);

function click(): void {
  emit('click');
}
</script>

<style scoped lang="scss">
.btn {

  &-main {
    background-color: var(--color-cyan);
    color: var(--color-white);
    padding: 1.2rem 3.5rem;
    border-radius: 2.5rem;
    transition: all 0.3s ease;
    font-size: v-bind(fontSize);

    @media (max-width: 728px) {
      font-size: 1.6rem;
    }

    &:hover {
      opacity: 0.7;
    }


    &:disabled {
      cursor: none;
      background-color: lightgrey;
    }
  }

  &-submit {
    border-radius: 1rem;
    padding: 1.6rem;

    @media (max-width: 728px) {
      width: 100%;
      padding: .8rem;
    }
  }

  &--centered {
    margin-inline: auto;
  }

  &--full {
    width: 100%;
  }

}
</style>