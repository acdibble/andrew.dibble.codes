<template>
  <div id="app">
    <v-app>
      <nav-bar class="header" />
      <transition name="fade">
        <router-view class="content" />
      </transition>
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

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
