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
    {
      path: '/summer-palace-late-autumn',
      name: 'summer-palace-late-autumn',
      component: () => import('../views/SummerPalaceLateAutumView.vue'),
    },
    {
      path: '/white-pagoda',
      name: 'white-pagoda',
      component: () => import('../views/WhitePagodaView.vue'),
    },
    {
      path: '/summer-palace-summer',
      name: 'summer-palace-summer',
      component: () => import('../views/SummerPalaceSummerView.vue'),
    },
  ],
})

export default router
