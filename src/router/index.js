import { createRouter, createWebHistory } from 'vue-router'
import LatestNews from '@/views/LatestNews.vue'
import HomeView from '@/pages/HomeView.vue'
const routes = [
  
  {
    path: '/LatestNews',
    name: 'LatestNews',
    component: LatestNews
  },
  { path: '/ToTheZone', component: HomeView },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
