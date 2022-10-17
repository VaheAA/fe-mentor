<template>
  <MainHeader />
  <router-view />
</template>

<script setup lang="ts">
import MainHeader from "./components/header/MainHeader.vue";
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

:root {
  --darkBlue: hsl(209, 23%, 22%);
  --veryDarkBlueDark: hsl(207, 26%, 17%);
  --veryDarkBlueLight: hsl(200, 15%, 8%);
  --DarkGrayLight: hsl(0, 0%, 52%);
  --veryLightGrayLight: hsl(0, 0%, 98%);
  --white: hsl(0, 0%, 100%);
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

body {
  font-family: 'Nunito Sans', sans-serif;
  line-height: 1.5;
  color: var(--veryDarkBlueLight);
  background-color: var(--veryLightGrayLight);
}

a,
a:active,
a:visited {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

.container {
  width: min(100% - 4rem, 127.5rem);
  margin-inline: auto;
}

main {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
</style>
