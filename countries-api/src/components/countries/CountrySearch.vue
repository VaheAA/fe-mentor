<template>
  <div class="search">
    <div class="container">
      <div class="search__inner">
        <form class="search__form" @submit.prevent="emit('submit')">
          <input class="search__input" type="text" placeholder="Search for a country"
            @input="$emit('update:countryName', ($event.target as HTMLInputElement).value)">
          <v-icon name="bi-search" class="search__icon" />
        </form>
        <select aria-label="select-region" class="search__select"
          @change="$emit('update:region', ($event.target as HTMLSelectElement).value)">
          <option disabled selected value>Filter by Region</option>
          <option class="search__select-option" v-for="option in options" :key="option.title" :value="option.title">
            {{option.title}}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const emit = defineEmits<{
  (e: 'submit'): void,
}>()

interface Options {
  title: string;
}

const props = defineProps<{
  options: Options[],
  countryName: string,
  region: string,
}>()

</script>

<style lang="scss" scoped>
.search {
  margin-bottom: 4rem;

  &__inner {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 72rem) {
      flex-direction: column;
      gap: 4.5rem;
    }
  }

  &__form {
    max-width: 48.5rem;
    width: 100%;
    position: relative;
  }

  &__select {
    max-width: 23rem;
    width: 100%;
    position: relative;
    padding: 1rem;
    border: none;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    font-size: 1.4rem;
    transition: box-shadow 0.3s ease;
    color: var(--mainColor);
    background-color: var(--secondaryBg);
    font-weight: 600;

    &::placeholder {
      color: var(--mainColor);
      font-family: inherit;
      opacity: 1;
    }
  }

  &__select-option {
    font-family: inherit;
    color: var(--mainColor);
    border: none;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }

  &__input {
    width: 100%;
    position: relative;
    padding: 1.5rem 1.5rem 1.5rem 6.5rem;
    border: none;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
    border-radius: 5px;
    color: inherit;
    font-family: inherit;
    font-size: 1.4rem;
    transition: box-shadow .3s ease;
    background-color: var(--secondaryBg);

    &:focus {
      outline: none;
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, .1);
    }
  }

  &__icon {
    position: absolute;
    left: 2.5rem;
    top: 1.45rem;
  }
}
</style>