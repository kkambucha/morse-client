import Vue from 'vue'
import Vuex from 'vuex'
import { stringify } from 'querystring';
import { send } from 'q';

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
    userToken: '',
    userSocket: null,
    userIsRegistrated: false,
    message: '',
    messages: []
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
    },
    setUserToken (state, token) {
      state.userToken = token;
    },
    setUserSocket (state, socket) {
      state.userSocket = socket;
    },

    // settings

    setSignalKey (state, value) {
      state.signalKey = value;
    },
    setUsername (state, value) {
      state.username = value;
    },
    setUserIsRegistrated (state, value) {
      state.userIsRegistrated = value;
    }
  },
  actions: {
    userRegistration () {
      const conn = Vue.prototype.$socket;

      if (!this.state.userIsRegistrated) {
        conn.onmessage = (e) => {
          const data = JSON.parse(e.data);

          if (data.type === 'registration') {
            this.commit('setUserToken', data.token)
            this.commit('setUserSocket', data.socket);
          }

          if (data.type === 'message') {
            if (data.token !== this.state.userToken) {
              this.commit('addMessage', {
                author: data.username,
                isOwn: false,
                text: data.text
              })
            }
          }
        };

        conn.onopen = () => conn.send(JSON.stringify({
          'type': 'registration',
          'username': this.state.username
        }));

        this.commit('setUserIsRegistrated', true);
      }
    },
    sendMessage () {
      const conn = Vue.prototype.$socket;

      conn.send(JSON.stringify({
        'type': 'message',
        'username': this.state.username,
        'text': this.state.message,
        'token': this.state.userToken
      }));
    }
  }
})
