import { createRouter, createWebHistory } from 'vue-router'
import CardView from '../views/CardView.vue'
import AboutView from '../views/AboutView.vue'
import FavouritesView from '../views/FavouritesView.vue'
import CardSpecView from '../views/CardSpecView.vue'

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
    path: '/acquired',
    name: 'favourites',
    component: FavouritesView
  },
  {
    path: '/cardspec/:id',
    name: 'CardSpec',
    component: CardSpecView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
