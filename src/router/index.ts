import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../layouts/LoginLayout.vue'),
      children: [
        {
          path: '/',
          component: () => import('../views/Login.vue'),
        },
      ],
    },
  ],
});

export default router;
