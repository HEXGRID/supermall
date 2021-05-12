// import Vue from 'vue'
// import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const home = () => import('views/home/home.vue')
const category = () => import('views/category/category.vue')
const profile = () => import('views/profile/profile.vue')
const shopcart = () => import('views/shopcart/shopcart.vue')
const detail=()=>import('views/detail/detail.vue')


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name:'home',
    meta:{
      keepAlive:true
    },
    component: home
  },
  {
    path: '/category',
    name:'category',
    meta:{
      keepAlive:true
    },
    component: category
  },
  {
    path: '/profile',
    name:'profile',
    component: profile
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: shopcart
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router