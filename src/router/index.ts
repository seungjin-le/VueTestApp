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
        {
          path: '123',
          component: () => import('../views/Login.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',

      meta: {
        layout: () => import('../layouts/LoginLayout.vue'),
      },
      components: [
        {
          path: '/',
          component: () => import('../views/Login.vue'),
        },
      ],
    },
  ],
});

export default router;
