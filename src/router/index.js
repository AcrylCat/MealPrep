import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipeDetails from '../components/recipes/RecipeDetails.vue'
import RecipeList from '../components/recipes/RecipeList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RecipeList
    },
    {
      path: '/recipes/new',
      name: 'new',
      props: {
        isNew: true,
      },
      component: RecipeDetails
    },
    {
      path: '/recipes/:id',
      name: 'recipe',
      component: RecipeDetails
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: RecipeList
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
