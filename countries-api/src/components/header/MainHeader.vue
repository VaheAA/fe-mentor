<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <RouterLink class="header__logo" to="/">
          Where in the world?
        </RouterLink>
        <div class="header__theme">
          <button type="button" class="header__thene-btn">Dark mode</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.header {
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  padding-block: 1.5rem;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    font-size: 3rem;
    font-weight: 800;
  }
}
</style>