import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'layout',
      component: Layout,

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
        {
          path: '/update',
          name: 'update',
          component: () => import('../views/Layout/update.vue')
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
    }
  ]
})

export default router
