<template>
  <div class="mobile-menu" @click.self="$emit('close')">
    <div class=" mobile-menu__inner">
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <RouterLink class="nav__link" to="/" @click.self="$emit('close')">Features</RouterLink>
          </li>
          <li class="nav__item">
            <RouterLink class="nav__link" to="/" @click.self="$emit('close')">Pricing</RouterLink>
          </li>
          <li class="nav__item">
            <RouterLink class="nav__link" to="/" @click.self="$emit('close')">Resources</RouterLink>
          </li>
        </ul>
      </nav>
      <div class="mobile-menu__actions">
        <TextButton v-if="sessionState.session && isNotEmpty(sessionState.session.user)" btn-text="My Links"
          href="/history" :centered="true" @click.self="$emit('close')" />
        <TextButton v-if="!sessionState.session || !isNotEmpty(sessionState.session.user)" btn-text="Log In"
          href="/login" :centered="true" @click.self="$emit('close')" />
        <MainButton @click="signOut" as="button" v-else btn-text="Log Out" :btn-submit="false" font-size="1.6rem"
          type="button" :centered="true" @click.self="$emit('close')" />
        <MainButton v-if="!sessionState.session || !isNotEmpty(sessionState.session.user)" :btn-submit="false"
          btn-text="Sign Up" font-size="1.6rem" type="button" as="link" :centered="true" @click.self="$emit('close')" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MainButton from '../buttons/MainButton.vue';
import TextButton from '../buttons/TextButton.vue';
import { userSessionStore } from '../../stores/user';
import { supabase } from '@/db/supabase';
import { isNotEmpty } from '@/helpers/checkIfEmptyObject';

const userStore = userSessionStore();
const sessionState = userStore();

const signOut = async () => {
  supabase.auth.signOut();
};



</script>

<style scoped lang="scss">
.mobile-menu {
  position: fixed;
  background-color: rgba($color: #000000, $alpha: .2);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  &__inner {
    background-color: var(--color-dark-violet);
    width: 90%;
    padding-inline: 2rem;
    padding-block: 3rem;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
  }

  .nav {
    width: 100%;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--color-grayish-violet);
    padding-bottom: 3rem;

    &__list {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 4rem;
      text-align: center;
    }

    &__link {
      color: var(--color-white);
      font-weight: bold;
    }
  }

  &__actions {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }

  .btn {
    font-weight: bold;
    color: var(--color-white);
  }
}
</style>