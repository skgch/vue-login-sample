import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Admin from '@/components/Admin'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {
        requiresAuth: true, requiresAdmin: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = JSON.parse(localStorage.getItem('auth'))
  if (to.meta.requiresAuth) {
    if (!auth || !auth.token) {
      next('/login')
    } else if (to.meta.requiresAdmin) {
      if (auth.user.role === 'admin') {
        next()
      } else {
        next('/')
      }
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
