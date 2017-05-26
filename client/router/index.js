import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Events from '../views/Events'
import About from '../views/About'
import Rdj from '../views/Rdj'
import Rules from '../views/Rules'
import Bot from '../views/Bot'
import Admin from '../views/Admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/rdj',
      component: Rdj
    },
    {
      path: '/rules',
      component: Rules
    },
    {
      path: '/bot',
      component: Bot
    },
    {
      path: '/events',
      component: Events
    },
    {
      path: '/admin',
      component: Admin
    }
  ]
})
