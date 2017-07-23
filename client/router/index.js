import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Events from '../views/Events'
import Rdj from '../views/Rdj'
import Rules from '../views/Rules'
import Bot from '../views/Bot'
import Triggers from '../views/Triggers'
import Admin from '../views/Admin'
import Unknown from '../views/Unknown'

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
      path: '/rdj',
      component: Rdj
    },
    {
      path: '/rules',
      component: Rules
    },
    {
      name: 'bot',
      path: '/bot/:type?',
      component: Bot
    },
    {
      path: '/triggers',
      component: Triggers
    },
    {
      path: '/events',
      component: Events
    },
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '*',
      component: Unknown
    },
    { path: '/bot-commands', redirect: '/bot' },
    { path: '/games', redirect: '/bot/games' },
    { path: '/leaderboard', redirect: '/bot/leaderboard' },
    { path: '/residentdjs', redirect: '/rdj' }
  ]
})
