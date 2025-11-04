import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/gallery',
      redirect: '/'
    },
    {
      path: '/collections',
      name: 'collections',
      component: () => import('../views/CollectionsView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/cardistry-orbit',
      name: 'cardistry-orbit',
      component: () => import('../views/CardistryOrbitView.vue'),
    },
    {
      path: '/forbidden-city',
      name: 'forbidden-city',
      component: () => import('../views/ForbiddenCityView.vue'),
    },
  ],
})

export default router
