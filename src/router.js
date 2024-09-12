import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './pages/HomeView.vue'
import CardView from './pages/CardView.vue'
import Banner from './components/Banner.vue'
const routes = [
  { path: '/', component: HomeView },
  { path: '/card', component: CardView },
  { path: '/banner', component: Banner },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default {
    router
}