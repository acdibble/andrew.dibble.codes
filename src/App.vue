<template lang="pug">
  div
    v-app(v-bind="theme")
      nav-bar(class="header")
      transition(name="fade")
        router-view(class="content")
      bottom(class="footer")
</template>

<script>
import NavBar from './components/NavBar';
import Bottom from './components/Bottom';

export default {
  name: 'App',
  components: { Bottom, NavBar },
  computed: {
    theme() {
      return { dark: this.$store.state.dark };
    },
  },
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
