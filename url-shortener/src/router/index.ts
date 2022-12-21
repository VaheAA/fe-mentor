import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/home/HomeView.vue';
import RegisterView from '@/views/register/RegisterView.vue';
import LoginView from '@/views/login/LoginView.vue';
import HistoryView from '@/views/history/HistoryView.vue';
import { userSessionStore } from '../stores/user';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView,
      meta: {
        needsAuth: true
      }
    }
  ]
});


router.beforeEach((to, from, next) => {
  const userStore = userSessionStore();
  const sessionState = userStore();

  if (to.meta.needsAuth) {
    if (sessionState.session) {
      return next();
    } else {
      return next('/');
    }
  }

  return next();
})

export default router;
