<template>
  <MainHeader />
  <router-view />
</template>

<script setup lang="ts">
import MainHeader from "./components/header/MainHeader.vue";
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');


.dark {
  --mainColor: hsl(209, 23%, 22%);
  --veryDarkBlueDark: hsl(207, 26%, 17%);
  --veryDarkBlueLight: hsl(200, 15%, 8%);
  --DarkGrayLight: #858585;
  --mainBg: hsl(0, 0%, 98%);
  --secondaryBg: hsl(0, 0%, 100%);
}

.light {
  --mainColor: hsl(209, 23%, 22%);
  --veryDarkBlueDark: hsl(207, 26%, 17%);
  --veryDarkBlueLight: hsl(200, 15%, 8%);
  --DarkGrayLight: #858585;
  --mainBg: hsl(0, 0%, 98%);
  --secondaryBg: hsl(0, 0%, 100%);
}

@media (prefers-color-scheme: dark) {
  .dark {
    --mainColor: hsl(0, 0%, 100%);
    --mainBg: hsl(207, 26%, 17%);
    --veryDarkBlueLight: hsl(200, 15%, 8%);
    --DarkGrayLight: #858585;
    --secondaryBg: hsl(209, 23%, 22%);
    --white: hsl(0, 0%, 100%);
  }
}

@media (prefes-color-scheme: light) {
  .light {
    --mainColor: hsl(209, 23%, 22%);
    --veryDarkBlueDark: hsl(207, 26%, 17%);
    --veryDarkBlueLight: hsl(200, 15%, 8%);
    --DarkGrayLight: #858585;
    --mainBg: hsl(0, 0%, 98%);
    --secondaryBg: hsl(0, 0%, 100%);
  }
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
  color: var(--mainColor);
  background-color: var(--mainBg);
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

.btn-back {
  border-radius: 5px;
  padding: .25rem 2rem;
  display: inline-block;
  transition: transform .3s ease, box-shadow .3s ease, -webkit-transform .3s ease, -moz-transform .3s ease, -webkit-box-shadow .3s ease;
  font-size: 1.6rem;
  margin-bottom: 8rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .1);
  background-color: var(--secondaryBg);

  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
    transform: scale(1.02);
  }
}
</style>
