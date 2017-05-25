import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import firebase from './service/firebase'
import Vuefire from 'vuefire'

sync(store, router)

Vue.use(Vuefire)

const app = new Vue({
  firebase: {
    rdjs: firebase.database.ref('rdjs').orderByChild('created_at')
  },
  router,
  store,
  ...App
})

export { app, router, store, firebase }
