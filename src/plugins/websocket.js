import Vue from 'vue';
import VueNativeSock from 'vue-native-websocket'

Vue.use(VueNativeSock, 'ws://localhost:8082', {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 3000,
})