<template>
  <v-toolbar>
    <v-toolbar-side-icon @click='toggleSidebar'></v-toolbar-side-icon>
    <v-toolbar-title class='headline text-uppercase'>
      <span>Morse</span>
      <span class='font-weight-light'>chat</span>
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default ({
  name: 'Toolbar',
  methods: {
    toggleSidebar () {
      this.$store.commit('toggleSidebar', !this.$store.state.isSidebarOpen);
    }
  }
})
</script>

<style>

</style>

