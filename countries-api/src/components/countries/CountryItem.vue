<template>
  <div class="details">
    <div class="container">
      <RouterLink class="btn btn-back" to="/">
        <v-icon name="fa-arrow-left" /> Back
      </RouterLink>
      <div class="details__inner" v-if="!isLoading">
        <div class="details__image">
          <img :src="country?.flags.svg" alt="">
        </div>
        <div class="details__info">
          <h1 class="details__title"> {{country?.name}}</h1>
          <div class="details__info-col">
            <span> <strong>Native Name:</strong> {{country?.nativeName}}
            </span>
            <span> <strong>Population:</strong> {{country?.population}}
            </span>
            <span> <strong>Region:</strong> {{country?.region}}
            </span>
            <span> <strong>Sub Region:</strong> {{country?.subregion}}
            </span>
            <span> <strong>Capital:</strong> {{country?.capital}}
            </span>
            <span> <strong>Top Level Domain:</strong> {{country?.topLevelDomain[0]}}
            </span>
            <span> <strong>Currencies</strong> <small v-for="currency in country?.currencies"
                :key="currency.code">{{currency.name}}</small>
            </span>
            <span> <strong>languages</strong> <small v-for="lng in country?.languages"
                :key="lng.iso639_1">{{lng.name}}</small>
            </span>
          </div>
          <div class="details__list">
            <span class="details__item">
              <strong>Border countries:</strong>
              <span>
                <RouterLink :to="{name:'CountryDetails', params: {country: border}}" class="details__tag"
                  v-for="border in  borderCountries" :key="border">{{border}}
                </RouterLink>
              </span>
            </span>
          </div>
        </div>
      </div>
      <LoadingSpinner v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import useCountries from '../../composables/useCountries';

import { onMounted, ref, watch } from 'vue';
import LoadingSpinner from '../ui/LoadingSpinner.vue';


interface CountryDetails {
  name: string;
  nativeName: string;
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: [string];
  currencies: [
    {
      code: string;
      name: string;
      symbold: string
    }
  ];
  languages: [
    {
      iso639_1: string,
      iso639_2: string,
      name: string,
      nativeName: string
    }
  ];
  borders: string[];
}

const route = useRoute()
const { getSingleCountry, getBorderCountries, isLoading } = useCountries();

const country = ref<CountryDetails | null>(null);
const borderCountries = ref<string[]>([])


onMounted(async () => {
  country.value = await getSingleCountry(`https://restcountries.com/v2/name/${route.params.country}`);

  if (country.value && country.value.borders) {
    console.log(country.value.borders)
    country.value.borders.forEach(async border => {
      const borderCountry: string = await getBorderCountries(`https://restcountries.com/v2/alpha/${border.toLowerCase()}`)
      borderCountries.value?.push(borderCountry)
    })
  }
})

watch(() => route.params.country, async newCountry => {
  country.value = await getSingleCountry(`https://restcountries.com/v2/name/${newCountry}`);
  if (country.value) {
    borderCountries.value = []
    country.value.borders.forEach(async border => {
      const borderCountry: string = await getBorderCountries(`https://restcountries.com/v2/alpha/${border.toLowerCase()}`)
      borderCountries.value?.push(borderCountry)
    })
  }
})

</script>

<style lang="scss" scoped>
.details {

  &__inner {
    display: flex;
    align-items: center;
    gap: 12rem;


    @media screen and (max-width: 72rem) {
      flex-direction: column;
      gap: 4rem;
    }
  }


  &__image {
    max-width: 56rem;
    width: 100%;
    height: 40rem;


    @media screen and (max-width: 72rem) {
      height: 26rem;
      width: 100%;
    }

    img {
      display: block;
      object-fit: cover;
      height: 40rem;
      width: 100%;


      @media screen and (max-width: 72rem) {
        height: 26rem;
      }
    }
  }

  &__info {
    flex: 1;
  }

  &__title {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 4.5rem;

    @media screen and (max-width: 72rem) {
      margin-bottom: 2.5rem
    }
  }

  &__info {

    @media screen and (max-width: 72rem) {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }

  &__info-col {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 9rem;
    max-height: 14.5rem;

    @media screen and (max-width: 72rem) {
      max-height: 100%;
      margin-bottom: 4rem;
    }

    span {
      font-size: 1.4rem;
      font-weight: 600;

      small {
        font-size: 1.4rem;
        color: var(--darkBlue);
        font-weight: 300;
      }
    }
  }

  &__list {
    font-size: 1.5rem;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 4rem;

    @media screen and (max-width: 72rem) {
      flex-direction: column;
      gap: 2rem;
    }
  }

  &__tag {
    border-radius: 5px;
    padding: .25rem 2rem;
    display: inline-block;
    transition: transform .3s ease, box-shadow .3s ease, -webkit-transform .3s ease, -moz-transform .3s ease, -webkit-box-shadow .3s ease;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
    background-color: var(--secondaryBg);


    &:not(:last-of-type) {
      margin-right: 1.5rem;
      margin-bottom: 1.5rem;
    }

    &:hover {
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
      transform: scale(1.02);
    }
  }
}
</style>