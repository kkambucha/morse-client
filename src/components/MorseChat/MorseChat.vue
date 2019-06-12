<template>
  <v-container fill-height>
    <div class='chat-wrapper'>
      <div class='chat-window'>
        <ChatWindow></ChatWindow>
      </div>
      <div class='chat-message'>
        <ChatMessage></ChatMessage>
      </div>
    </div>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex';

  import MorseCode from '../../libs/morse-code';
  import SoundCreator from '../../libs/sound-creator';
  import dispatchForCode from '../../libs/dispatch-for-code';

  import Navigation from '../Navigation';
  import ChatWindow from './ChatWindow';
  import ChatMessage from './ChatMessage';

  export default {
    components: {
      Navigation,
      ChatWindow,
      ChatMessage
    },
    data: () => ({

    }),
    created () {
      this.morseCode = new MorseCode();
      this.signalSound = new SoundCreator('signal.wav');
    },
    mounted () {
      window.addEventListener('keydown', this.keyDown);
      window.addEventListener('keyup', this.keyUp);

      this.morseCode.on('message', (message) => {
        this.$store.commit('setMessage', message);
      });
    },
    methods: {
      keyDown: function (event) {
        dispatchForCode(event, code => {
          if (code === this.signalKey) {
            this.signalSound.play();
            this.morseCode.startSignal();
          }

          if (code === this.sendKey) {
            this.sendMessage();
          }

          if (code === this.backspaceKey) {
            console.log('backspace key');
            this.morseCode.backspace();
          }

          if (code === this.clearKey) {
            console.log('clear key');
            this.morseCode.clearMessage();
          }
        });
      },
      keyUp: function (event) {
        dispatchForCode(event, code => {
          if (code === this.signalKey) {
            this.signalSound.stop();
            this.morseCode.stopSignal();
          }
        });
      },
      sendMessage: function () {
        if (this.message) {
          this.$store.commit('addMessage', {
            text: this.message,
            author: this.username
          });

          this.morseCode.clearMessage();
        }
      }
    },
    computed: {
      ...mapState([
        'signalKey',
        'clearKey',
        'sendKey',
        'backspaceKey',
        'message',
        'username'
      ])
    }
  }
</script>

<style scoped>
  .chat-wrapper {
    height: 100%;
    width: 100%;
    position: relative;
    border: 1px solid #000;
  }
  .chat-window {
    height: 100%;
    width: 100%;
    padding-bottom: 200px;
    display: flex;
    box-sizing: border-box;
  }
  .chat-message {
    height: 200px;
    display: block;
    position: absolute;
    width: 100%;
    bottom: 0;
  }
</style>
