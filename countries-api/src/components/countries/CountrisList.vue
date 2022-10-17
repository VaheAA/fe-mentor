<template>
  <div class="countries">
    <div class="container">
      <div class="countries__inner">
        <ul class="countries__list">
          <CountryItem v-for="country in countries" :key="country.name.common" :country="country" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isFetching, error, countries } from '../../composables/useCountries';
import { ref } from 'vue';
import CountryItem from './CountryItem.vue';


</script>

<style lang="scss" scoped>
.countries {

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 27.5rem);
    gap: 4.5rem;
  }
}
</style>