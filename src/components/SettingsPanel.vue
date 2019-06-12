<template>
  <v-container>
    <v-layout>
      <v-card class='settings-panel'>
        <v-card-title
          primary-title
        >
          <h3>
            Settings
          </h3>
        </v-card-title>

        <v-card-text>
          <v-form
            v-model='valid'
          >
            <v-text-field
              label='Nickname'
              v-model='userName'
              required
            ></v-text-field>
            <v-text-field
              label='Signal key'
              v-model='signalKey'
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      valid: true
    }
  },
  computed: {
    signalKey: {
      get () {
        return this.$store.state.signalKey;
      },
      set (value) {
        this.$store.commit('setSignalKey', value);
      }
    },
    userName: {
      get () {
        return this.$store.state.username;
      },
      set (value) {
        this.$store.commit('setUsername', value);
      }
    }
  }
}
</script>

<style>
  .settings-panel {
    width: 100%;
  }
</style>

