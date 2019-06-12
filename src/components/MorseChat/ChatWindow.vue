<template>
  <v-card class='chat-window-wrapper'>
    <div class='chat-window-messages' ref='scrollable'>
      <ChatMessageText v-for='(message, key) in messages' :key='key' :message='message'></ChatMessageText>
    </div>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

import ChatMessageText from './ChatMessageText';

export default {
  components: {
    ChatMessageText
  },
  methods: {
    onMessagesChange () {
      this.$nextTick(() => {
        this.$refs.scrollable.scrollTop = this.$refs.scrollable.scrollHeight;
      });
    }
  },
  watch: {
    messages: 'onMessagesChange'
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
    overflow-y: auto;
    padding: 20px;
  }

  .chat-window-messages {
    height: auto;
    overflow-y: scroll;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 20px 20px;
  }
</style>
