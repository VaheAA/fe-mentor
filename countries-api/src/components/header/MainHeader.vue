<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <RouterLink class="header__logo" to="/">
          Where in the world?
        </RouterLink>
        <div class="header__theme">
          <button type="button" class="header__theme-btn" @click="toggleDarkMode()">
            <v-icon class="header__theme-icon" name="fa-moon" />
            <span>Dark mode</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const dark = ref(false);

const toggleDarkMode = () => dark.value = !dark.value

watch(() => dark.value, newValue => {
  if (newValue === true) {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  } else {
    document.documentElement.classList.add('light')
    document.documentElement.classList.remove('dark')
  }
})

</script>

<style lang="scss" scoped>
.header {
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  padding-block: 1.5rem;
  background-color: var(--secondaryBg);

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__theme-btn {
    background-color: transparent;
    border: none;

    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      font-size: 1.8rem;
      color: var(--mainColor);
    }
  }

  &__theme-icon {
    font-size: 1.4rem;
    color: var(--mainColor);
  }

  &__logo {
    font-size: 3rem;
    font-weight: 800;


    @media screen and (max-width: 72rem) {
      font-size: 2rem;
    }
  }
}
</style>