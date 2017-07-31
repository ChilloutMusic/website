import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  triggers: []
}

const mutations = {
  saveTriggers (state, data) {
    state.triggers = data
  }
}

const actions = {
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
