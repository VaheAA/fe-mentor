
<template>
  <main>
    <Hero />
    <Shortener />
    <Statistics />
    <Boost />
  </main>
</template>

<script setup lang="ts">
import Hero from './Hero.vue';
import Shortener from '../../components/form/Shortener.vue';
import Statistics from './Statistics.vue';
import Boost from './Boost.vue';
</script>
