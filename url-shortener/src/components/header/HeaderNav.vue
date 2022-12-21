<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <RouterLink class="nav__link" to="/">Features</RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink class="nav__link" to="/">Pricing</RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink class="nav__link" to="/">Resources</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.nav {
  @media (max-width: 728px) {
    display: none;
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  &__link {
    display: inline-block;
    color: var(--color-grayish-violet);
    font-size: 1.6rem;
    transition: all 0.3s ease;

    &:hover {
      color: var(--color-very-dark-violet);
    }
  }
}
</style>