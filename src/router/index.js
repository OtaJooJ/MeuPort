import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import Sobre from '@/views/sobre.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/sobre', name: 'Sobre', component: Sobre },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router