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
      path: '/visitor-info',
      name: 'visitor-info',
      component: () => import('../views/VisitorInfoView.vue'),
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('../views/ScheduleView.vue'),
    },
    {
      path: '/vendors',
      name: 'vendors',
      component: () => import('../views/VendorsView.vue'),
    },
    {
      path: '/volunteers',
      name: 'volunteers',
      component: () => import('../views/VolunteersView.vue'),
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      component: () => import('../views/SponsorsView.vue'),
    },
    {
      path: '/donate',
      name: 'donate',
      component: () => import('../views/DonateView.vue'),
    },
  ],
})

export default router
