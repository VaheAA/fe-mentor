<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <Logo type="light" />
        <div class="footer__menu">
          <span class="footer__menu-title">Features</span>
          <ul class="footer__list">
            <li class="footer__item">
              <RouterLink class="footer__link" to="'/'">Link Shortening</RouterLink>
            </li>
            <li class="footer__item">
              <RouterLink class="footer__link" to="'/'">Branded Links</RouterLink>
            </li>
            <li class="footer__item">
              <RouterLink class="footer__link" to="'/'">Resources
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="footer__menu">
          <span class="footer__menu-title">Analytics</span>
          <ul class="footer__list">
            <li class="footer__item">
              <RouterLink class="footer__link" to="'/'">Blog</RouterLink>
            </li>
            <li class="footer__item">
              <RouterLink class="footer__link" to="'/'">Developers</RouterLink>
            </li>
            <li class="footer__item">
              <RouterLink class="footer__link" to="'/'">Support
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="footer__menu">
          <span class="footer__menu-title">Company</span>
          <ul class="footer__list">
            <li class="footer__item">
              <RouterLink class="footer__link" to="'/'">About</RouterLink>
            </li>
            <li class="footer__item">
              <RouterLink class="footer__link" to="'/'">Our Team</RouterLink>
            </li>
            <li class="footer__item">
              <RouterLink class="footer__link" to="'/'">Careers
              </RouterLink>
            </li>
            <li class="footer__item">
              <RouterLink class="footer__link" to="'/'">Contact
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="footer__social">
          <a href="/" target="_blank">
            <font-awesome-icon class="footer__icon" icon="fa-brands fa-facebook" />
          </a>
          <a href="/" target="_blank">
            <font-awesome-icon class="footer__icon" icon="fa-brands fa-twitter" />
          </a>
          <a href="/" target="_blank">
            <font-awesome-icon class="footer__icon" icon="fa-brands fa-pinterest" />
          </a>
          <a href="/" target="_blank">
            <font-awesome-icon class="footer__icon" icon="fa-brands fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Logo from '../logo/Logo.vue';


</script>

<style scoped lang="scss">
.footer {
  background-color: var(--color-very-dark-violet);
  padding-block: 4rem;

  &__inner {
    display: flex;
    align-items: start;

    @media (max-width: 728px) {
      flex-direction: column;
      gap: 3rem;
    }
  }

  &__menu {
    margin-left: auto;

    @media (max-width: 728px) {
      margin-left: 0;
      width: 100%;
      text-align: center;
    }


  }

  &__menu-title {
    color: var(--color-white);
    display: block;
    margin-bottom: 2rem;
  }

  &__item {
    &:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }

  &__link {
    color: var(--color-grayish-violet);
    font-size: 1.6rem;
    transition: all 0.3s ease;

    &:hover {
      color: var(--color-cyan);
    }
  }

  &__social {
    margin-left: 10rem;
    display: flex;
    gap: 2rem;

    @media (max-width: 728px) {
      margin-left: auto;
      margin-right: auto;
    }
  }

  &__icon {
    color: var(--color-white);
    font-size: 2.5rem;
    transition: all 0.3s ease;

    &:hover {
      color: var(--color-cyan);
    }
  }
}
</style>