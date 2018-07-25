<template lang="pug">
  v-app(v-bind="theme")
    nav-bar
    v-content
      transition(name="fade")
        router-view
    bottom
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
