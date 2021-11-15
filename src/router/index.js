import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing Page.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Product from '../views/Product.vue'
import DetailProduct from '../views/DetailProduct.vue'
import Packages from '../views/Packages.vue'
import Pemesanan from '../views/Pemesanan.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/products',
    name: 'Products',
    component: Product
  },
  {
    path: '/products/:travelagent',
    name: 'DetailProducts',
    component: DetailProduct
  },
  {
    path: '/products/:travelagent/:idpackages',
    name: 'Packages',
    component: Packages
  },
  {
    path: '/products/:travelagent/:idpackages/booking/:idpackage',
    name: 'Pemesanan',
    component: Pemesanan
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
