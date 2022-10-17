<template>
  <li>
    <RouterLink :to="{name:'CountryDetails', params: {country: country.name.common.toLowerCase().slice(0,3)}}"
      class="country">
      <img class="country__flag" :src="country.flags.png" :alt="country.name.common">
      <div class="country__info">
        <h2 class="country__name">{{country.name.common}}</h2>
        <div class="country__text">
          <span> <strong>Population:</strong> {{country.population}}
          </span>
          <span> <strong>Region:</strong> {{country.region}}
          </span>
          <span> <strong>Capital:</strong> {{country.capital && country.capital[0]}}
          </span>
        </div>
      </div>
    </RouterLink>
  </li>
</template>

<script setup lang="ts">

interface Country {
  flags: {
    png: string;
    svg: string;
  };
  name: {
    common: string
  };
  population: number;
  region: string;
  capital?: [string];
}
const props = defineProps<{
  country: Country
}>()



</script>

<style lang="scss" scoped>
.country {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
  border-radius: 10px;
  overflow: hidden;
  transition: transform .3s ease, box-shadow .3s ease, -webkit-transform .3s ease, -moz-transform .3s ease, -webkit-box-shadow .3s ease;

  &:hover {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, .1);
    transform: scale(1.02);
  }

  &__flag {
    width: 100%;
    height: 16rem;
    display: block;
  }

  &__info {
    padding: 3rem;
    color: inherit;
  }

  &__name {
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: 2rem;
  }

  &__text {
    display: flex;
    flex-direction: column;
    width: 100%;

    span {
      font-size: 1.4rem;
    }
  }
}
</style>