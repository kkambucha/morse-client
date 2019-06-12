import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSidebarOpen: false,
    signalKey: 'z',
    clearKey: 'x',
    sendKey: 'Enter',
    backspaceKey: 'v'
  },
  mutations: {
    toggleSidebar (state, value) {
      state.isSidebarOpen = value;
    }
  },
  actions: {

  }
})
