import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'layout',
      component: Layout,
<<<<<<< HEAD
      redirect: "dashboard",
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('../views/Layout/index.vue')
        },
        {
          path: '/tips',
          name: 'tips',
          component: () => import('../views/Layout/tips.vue')
        },
        
=======
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('../views/Layout/Main.vue')
        }
>>>>>>> b646921b2ea7c2dc95a3bf54f222d1057165b78f
      ]
    },
    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
