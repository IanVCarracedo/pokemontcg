import { createRouter, createWebHistory } from 'vue-router'
import CardView from '../views/CardView.vue'
import AboutView from '../views/AboutView.vue'
import FavouritesView from '../views/FavouritesView.vue'

const routes = [
  {
    path: '/',
    name: 'card',
    component: CardView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/favourites',
    name: 'favourites',
    component: FavouritesView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
