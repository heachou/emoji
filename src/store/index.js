import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import actions from './actions'
import mutations from './mutations'
import getters from './getter'
import state from './state'
export default new Vuex.Store({
  mutations,
  getters,
  state,
  actions
})

