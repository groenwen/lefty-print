import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '',
          name: 'index',
          component: () => import('../views/IndexView.vue')
        },
        {
          path: 'qa',
          component: () => import('../views/QAView.vue')
        },
        {
          path: 'make',
          component: () => import('../views/MakeView.vue')
        },
        {
          path: 'quote',
          component: () => import('../views/QuoteView.vue')
        },
        {
          path: 'days',
          component: () => import('../views/DaysView.vue')
        },
        {
          path: 'products',
          component: () => import('../views/ProductsView.vue')
        },
        {
          path: 'product/:id',
          component: () => import('../views/ProductView.vue')
        },
        {
          path: 'carts',
          component: () => import('../views/CartsView.vue')
        },
        {
          path: 'carts2',
          component: () => import('../views/CartsFormView.vue')
        },
        {
          path: 'OrderCheckout/:orderId',
          component: () => import('../views/OrderCheckoutView.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Dashboard/DashboardView.vue'),
      children: [
        {
          path: 'products',
          component: () => import('../views/Dashboard/ProductsView.vue')
        },
        {
          path: 'orders',
          component: () => import('../views/Dashboard/OrdersView.vue')
        },
        {
          path: 'upload',
          component: () => import('../views/Dashboard/UploadFile.vue')
        },
        {
          path: 'coupons',
          component: () => import('../views/Dashboard/CouponsView.vue')
        }
      ]
    }
  ]
})

export default router
