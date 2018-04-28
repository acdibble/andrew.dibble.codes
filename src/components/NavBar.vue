<template lang="pug">
  v-toolbar
    v-toolbar-title Welcome
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
  },
};
</script>
