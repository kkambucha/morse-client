<template>
  <v-card class='message-wrapper'>
    <div class='possible-characters' v-if='possibleCharacters'>
      {{ possibleCharacters }}
    </div>
    <v-card-text>
      <v-textarea
        solo
        no-resize
        label='Message'
        disabled
        :value='message'
      >
      </v-textarea>
    </v-card-text>
    <v-card-actions class='message-actions'>
      <v-btn small color='info' @click='sendMessage' :disabled='!this.message'>Send</v-btn>
      <v-btn small flat color='info' @click='backspaceMessage'>Backspace</v-btn>
      <v-btn small flat color='info' @click='clearMessage'>Clear</v-btn>
      <RedLight></RedLight>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

import RedLight from './RedLight';

export default {
  components: {
    RedLight
  },
  props: {
    clearMessage: Function,
    sendMessage: Function,
    backspaceMessage: Function
  },
  computed: {
    ...mapState([
      'message',
      'possibleCharacters'
    ])
  }
}
</script>

<style scoped>
  .message-wrapper {
    height: 100%;
  }
  .message-actions {
    padding: 0 16px;
    top: -20px;
    position: relative;
  }
  .possible-characters {
    position: absolute;
    top: -40px;
    text-transform: uppercase;
    background: rgba(0, 0, 0, .7);
    color: #fff;
    padding: 10px 20px;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 18px;
  }
</style>
