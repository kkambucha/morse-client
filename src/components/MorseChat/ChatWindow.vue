<template>
  <v-card class='chat-window-wrapper'>
    <ChatMessageText v-for='(message, key) in messages' :key='key' :message='message'></ChatMessageText>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

import ChatMessageText from './ChatMessageText';

export default {
  components: {
    ChatMessageText
  },
  computed: {
    ...mapState([
      'messages'
    ])
  }
}
</script>

<style scoped>
  .chat-window-wrapper {
    height: 100%;
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid #000;
  }
</style>
