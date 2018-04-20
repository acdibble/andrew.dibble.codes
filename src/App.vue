<template>
  <div id="app">
    <v-app class="application--toolbar application--footer application--footer-fixed">
      <nav-bar></nav-bar>
      <router-view/>
      <bottom></bottom>
    </v-app>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import Bottom from './components/Bottom';

export default {
  name: 'App',
  components: { Bottom, NavBar },
};
</script>

<style>

</style>
