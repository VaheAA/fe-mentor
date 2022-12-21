<template>
  <div class="auth" v-if="!sessionState.loading">
    <h1 class="title">Register and make use of all advantages!</h1>
    <RegisterForm />
    <div class="auth__redirect">
      <p>Already have an account?
        <RouterLink class="auth__redirect-link" to="/login">Log in!</RouterLink>
      </p>
    </div>
  </div>
  <LoadingSpinner v-else />

</template>

<script setup lang="ts">
import RegisterForm from './RegisterForm.vue';
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue';
import { userSessionStore } from '@/stores/user';

const userStore = userSessionStore();
const sessionState = userStore();

</script>

<style scoped lang="scss">
.auth {
  padding-top: 2rem;
  padding-bottom: 4rem;
  max-width: 75rem;
  margin-inline: auto;

  .title {
    text-align: center;
    margin-bottom: 4rem;
  }

  &__redirect {
    text-align: center;
    margin-top: 2rem;
    color: var(--color-very-dark-violet);
  }

  &__redirect-link {
    color: var(--color-cyan);
  }
}
</style>