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
    isRedLightOn: false,
    possibleCharacters: '',
    message: '',
    messages: [
      {
        author: 'Anonymous',
        text: 'Asdas',
        isOwn: false
      },
      {
        author: 'Vadim',
        text: 'qweqwe',
        isOwn: false
      },
      {
        author: 'Anonymous',
        text: 'Asdas',
        isOwn: true
      },
      {
        author: 'Vadim',
        text: 'qweqwe',
        isOwn: false
      },
      {
        author: 'Anonymous',
        text: 'Asdas',
        isOwn: false
      },
      {
        author: 'Vadim',
        text: 'qweqwe',
        isOwn: true
      }
    ]
  },
  mutations: {
    toggleSidebar (state, value) {
      state.isSidebarOpen = value;
    },
    toggleRedLight (state) {
      state.isRedLightOn = !state.isRedLightOn;
    },
    setMessage (state, value) {
      state.message = value;
      this.commit('setPossibleCharacters', '');
    },
    setPossibleCharacters (state, characters) {
      state.possibleCharacters = characters;
    },
    addMessage (state, message) {
      if (message) {
        state.messages.push(message);
        this.commit('setMessage', '');
        this.commit('setPossibleCharacters', '');
      }
    }
  },
  actions: {

  }
})
