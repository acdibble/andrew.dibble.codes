<template>
  <div id="app">
    <v-app>
      <nav-bar class="header" />
      <router-view class="content" />
      <bottom class="footer" />
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
body {
  min-height: 100vh;
}

.content {
  grid-area: content;
}

.header {
  grid-area: header;
}

.footer {
  grid-area: footer;
}
</style>
