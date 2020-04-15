import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mainPage',
    meta: {layout: 'main'},
    component: () => import('@/views/mainPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('@/views/login.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    meta: {layout: 'empty'},
    component: () => import('@/views/registration.vue')
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    meta: {layout: 'main'},
    component: () => import('@/components/wishlist.vue')
  },
  {
    path: '/goodPage/:index',
    name: 'goodPage',
    meta: {layout: 'main'},
    component: () => import('@/views/goodPage.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {layout: 'main'},
    component: () => import('@/components/cart.vue'),
    props: true
  },
  {
    path: '/photoShow',
    name: 'photoShow',
    meta: {layout: 'empty'},
    component: () => import('@/views/photoShow.vue')
  }
  
]


const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
