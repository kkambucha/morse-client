<template>
  <v-app>
    <Toolbar></Toolbar>
    <Navigation></Navigation>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar';
import Navigation from './components/Navigation';

export default {
  name: 'App',
  components: {
    Toolbar,
    Navigation
  },
  data () {
    return {
      //
    }
  }
}
</script>
