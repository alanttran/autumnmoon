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
    {
      path: '/learn-more',
      name: 'learn-more',
      component: () => import('../views/LearnMoreView.vue'),
    },
    {
      path: '/zhongqiu-jie',
      name: 'zhongqiu-jie',
      component: () => import('../views/LearnMoreViews/ZhongqiuJieView.vue'),
    },
    {
      path: '/chuseok',
      name: 'chuseok',
      component: () => import('../views/LearnMoreViews/ChuseokView.vue'),
    },
    {
      path: '/tet-trung',
      name: 'tet-trung',
      component: () => import('../views/LearnMoreViews/TetTrungView.vue'),
    },
    {
      path: '/boun-om-touk',
      name: 'boun-om-touk',
      component: () => import('../views/LearnMoreViews/BounOmToukView.vue'),
    },
    {
      path: '/boun-that-luang',
      name: 'boun-that-luang',
      component: () => import('../views/LearnMoreViews/BounThatLuangView.vue'),
    },
    {
      path: '/thadingyut',
      name: 'thadingyut',
      component: () => import('../views/LearnMoreViews/ThadingyutView.vue'),
    },
    {
      path: '/tsukimi',
      name: 'tsukimi',
      component: () => import('../views/LearnMoreViews/TsukimiView.vue'),
    },
  ],
})

export default router
