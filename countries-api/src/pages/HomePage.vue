<template>
  <main>
    <CountrySearch v-model:region="region" :options="options" v-model:countryName="countryName"
      @submit="onHandleSearch()" />
    <CountrisList :countries="countries" v-if="!isLoading" />
    <LoadingSpinner v-else />
  </main>
</template>

<script setup lang="ts">
import CountrisList from '../components/countries/CountrisList.vue';
import CountrySearch from '../components/countries/CountrySearch.vue'
import useCountries from '../composables/useCountries'
import { onMounted, ref, watch } from 'vue';
import LoadingSpinner from '../components/ui/LoadingSpinner.vue';

const { getCountries, isLoading } = useCountries();

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

const options = ref([
  {
    title: 'Africa',
  },
  {
    title: 'Americas',
  },
  {
    title: 'Asia'
  },
  {
    title: 'Europe',
  },
  {
    title: 'Oceania'
  }
])

const countries = ref<Country[]>([]);
const countryName = ref('');
const region = ref('');


onMounted(async () => {
  countries.value = await getCountries('https://restcountries.com/v2/all');
})


const onHandleSearch = async () => {
  countries.value = await getCountries(`https://restcountries.com/v2/name/${countryName.value.toLowerCase()}`)
}

const onHandleFilter = async () => {
  countries.value = await getCountries(`https://restcountries.com/v2/region/${region.value.toLowerCase()}`)
}

watch(() => countryName.value, async newValue => {
  if (newValue === '') {
    countries.value = await getCountries('https://restcountries.com/v2/all');
  }
})

watch(() => region.value, async newRegion => {
  if (newRegion !== '') {
    countries.value = await getCountries(`https://restcountries.com/v2/region/${newRegion.toLowerCase()}`)
  }
})



</script>

<style scoped>

</style>