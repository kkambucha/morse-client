<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
    </v-layout>
      <h1>Let's go!</h1>
    <v-layout>

    </v-layout>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex';

  import MorseCode from '../libs/morse-code';
  import SoundCreator from '../libs/sound-creator';
  import dispatchForCode from '../libs/dispatch-for-code';

  import Navigation from './Navigation';

  export default {
    components: {
      Navigation
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
    },
    methods: {
      keyDown: function (event) {
        dispatchForCode(event, code => {
          if (code === this.signalKey) {
            this.signalSound.play();
            this.morseCode.startSignal();
          }

          if (code === this.sendKey) {
            console.log('send key');
            // this.sendMessage();
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
      }
    },
    computed: {
      ...mapState([
        'signalKey',
        'clearKey',
        'sendKey',
        'backspaceKey'
      ])
    }
  }
</script>

<style>

</style>
