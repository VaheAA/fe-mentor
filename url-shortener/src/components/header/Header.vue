<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <Logo type="dark" />
        <HeaderNav />
        <HeaderActions />
        <button type="button" class="hamburger" :class="{ 'open': isMenuOpen }" @click="toggleMenu">
          <span class="hamburger__line hamburger__line-top"></span>
          <span class="hamburger__line hamburger__line-middle"></span>
          <span class="hamburger__line hamburger__line-bottom"></span>
        </button>
      </div>
    </div>
    <MobileNav />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Logo from '../logo/Logo.vue';
import HeaderActions from './HeaderActions.vue';
import HeaderNav from './HeaderNav.vue';
import MobileNav from './MobileNav.vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

</script>

<style lang="scss" scoped>
.header {
  padding-block: 5rem;

  &__inner {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 4rem;

    @media (max-width: 728px) {
      justify-content: space-between;
    }
  }
}

.hamburger {
  display: none;
}

@media (max-width: 728px) {
  .hamburger {
    background: transparent;
    border: 0;
    width: 24px;
    height: 24px;
    cursor: pointer;
    position: relative;
    z-index: 10;
    transition: all 0.2s ease;
    display: block;

    &__line {
      position: absolute;
      top: 0;
      left: 0;
      width: 24px;
      height: 3px;
      background-color: var(--color-grayish-violet);
      transform: rotate(0);
      transition: all 0.3s ease;

      &-middle {
        transform: translateY(8px);
      }

      &-bottom {
        transform: translateY(16px);
      }
    }

    &.open {
      .hamburger__line-top {
        transform: rotate(45deg) translateY(7px) translateX(7px);
      }

      .hamburger__line-middle {
        display: none;
      }

      .hamburger__line-bottom {
        transform: rotate(-45deg) translateY(7px) translateX(-7px);
      }
    }
  }
}
</style>