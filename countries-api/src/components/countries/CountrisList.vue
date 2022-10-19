<template>
  <div class="countries">
    <div class="container">
      <div class="countries__inner">
        <ul class="countries__list">
          <CountryCard v-for="country in countries" :key="country.name" :country="country" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CountryCard from './CountryCard.vue';

interface Country {
  flags: {
    png: string;
    svg: string;
  };
  name: string;
  population: number;
  region: string;
  capital: string;
}

const props = defineProps<{
  countries: Country[]
}>()


</script>

<style lang="scss" scoped>
.countries {

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 28rem));
    gap: 4.5rem;
    place-content: center;
  }
}
</style>