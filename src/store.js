import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSidebarOpen: false,
    signalKey: 'z',
    clearKey: 'x',
    sendKey: 'Enter',
    backspaceKey: 'v',
    username: 'Anonymous',
    message: '',
    messages: [
      {
        author: 'Anonymous',
        text: 'Asdas'
      },
      {
        author: 'Vadim',
        text: 'qweqwe'
      }
    ]
  },
  mutations: {
    toggleSidebar (state, value) {
      state.isSidebarOpen = value;
    },
    setMessage (state, value) {
      state.message = value;
    },
    addMessage (state, message) {
      state.messages.push(message);
    }
  },
  actions: {

  }
})
