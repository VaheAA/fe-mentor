import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import CountryDetails from '../pages/CountryDetails.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/:country',
    name: 'CountryDetails',
    component: CountryDetails
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
