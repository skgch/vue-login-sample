import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Account from '@/components/Account'

Vue.use(Router)

function ifAuthenticated (to, from, next) {
  if (localStorage.getItem('user-token')) {
    next()
    return
  }
  next('/login')
}

function ifNotAuthenticated (to, from, next) {
  if (!localStorage.getItem('user-token')) {
    next()
    return
  }
  next('/')
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: ifNotAuthenticated
    }
  ]
})
