import { useFetch } from '@vueuse/core';

const {
  isFetching,
  error,
  data: countries
} = await useFetch('https://restcountries.com/v3.1/all').get().json();

export { isFetching, error, countries };
