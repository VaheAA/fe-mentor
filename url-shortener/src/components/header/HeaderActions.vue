<template>
  <div class="actions">
    <TextButton v-if="sessionState.session" btn-text="My Links" href="/history" />
    <TextButton v-if="!sessionState.session" btn-text="Log In" href="/login" />
    <MainButton @click="signOut" as="button" v-else btn-text="Log Out" :btn-submit="false" font-size="1.6rem"
      type="button" />
    <MainButton v-if="!sessionState.session" :btn-submit="false" btn-text="Sign Up" font-size="1.6rem" type="button"
      as="link" />
  </div>
</template>

<script setup lang="ts">
import MainButton from '../buttons/MainButton.vue';
import TextButton from '../buttons/TextButton.vue';
import { userSessionStore } from '../../stores/user';
import { supabase } from '@/db/supabase';

const userStore = userSessionStore();
const sessionState = userStore();

const signOut = async () => {
  supabase.auth.signOut();
};

</script>

<style scoped lang="scss">
.actions {
  margin-left: auto;
  display: flex;
  gap: 3rem;

  @media (max-width: 728px) {
    display: none;
  }

}
</style>