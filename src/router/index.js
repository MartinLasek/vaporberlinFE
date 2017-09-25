import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/sites/Home'
import Topics from '@/components/sites/Topics'
import Register from '@/components/sites/Register'
import Login from '@/components/sites/Login'
import Profile from '@/components/sites/Profile'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/topics',
      name: 'topics',
      component: Topics
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
