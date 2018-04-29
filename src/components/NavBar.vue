<template lang="pug">
  v-toolbar
    v-toolbar-title(@click="handleClick" class="noselect") Welcome
    v-spacer
    v-toolbar-items(class="hidden-sm-and-down")
      v-btn(v-for="route in routes" :key="route" @click="navigate(route)" flat) {{ route }}
    v-menu(class="hidden-md-and-up")
      v-toolbar-side-icon(slot="activator")
      v-list
        v-list-tile(v-for="route in routes" :key="route" @click="navigate(route)")
          v-list-tile-title {{ route }}
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    routes: ['Home', 'About', 'Portfolio', 'Contact'],
  }),
  methods: {
    navigate(route) {
      if (route === 'Home') {
        this.$router.push('/');
      } else {
        this.$router.push(`/${route.toLowerCase()}`);
      }
    },
    handleClick() {
      this.$store.commit('toggle');
    },
  },
};
</script>

<style scoped>
.noselect {
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}
</style>
