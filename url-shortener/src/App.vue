<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue';
import Toast from './components/ui/Toast.vue';
import { supabase } from './db/supabase';
import { userSessionStore } from './stores/user';
import { useRouter } from 'vue-router';


const userStore = userSessionStore();
const sessionState = userStore();
const router = useRouter()

supabase.auth.onAuthStateChange((event, session) => {
  sessionState.session = session
  switch (event) {
    case 'SIGNED_IN':
      router.push('/history')
      break;
    case 'SIGNED_OUT':
      router.push('/');
      break;
  }
})


</script>

<template>
  <Header />
  <RouterView />
  <Footer />
  <Toast />
</template>

<style>

</style>
