import { createRouter, createWebHistory } from 'vue-router'
import HomeContent from '../components/HomeContent.vue'
import RecipesContent from '../components/RecipesContent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeContent
  },
  {
      path:'/recipes',
      name: 'recipes',
      component: RecipesContent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
