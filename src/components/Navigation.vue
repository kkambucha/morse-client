<template>
  <v-navigation-drawer
    v-model='isSidebarOpen'
    absolute
    temporary
  >
    <v-list class='pt-0' dense>
      <v-list-tile
        v-for='item in items'
        :key='item.title'
        @click='goTo(item.path)'
      >
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    items: {
      main: {
        title: 'Main',
        path: '/'
      },
      settings: {
        title: 'Settings',
        path: '/settings'
      }
    }
  }),
  methods: {
    goTo (path) {
      this.$router.push(path);
    }
  },
  computed: {
    isSidebarOpen: {
      get () {
        return this.$store.state.isSidebarOpen;
      },
      set (value) {
        this.$store.commit('toggleSidebar', value);
      }
    }
  }
}
</script>

<style>

</style>

