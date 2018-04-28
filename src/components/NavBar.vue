<template>
  <v-toolbar>
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title>Welcome</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-for="route in routes" :key="route" @click="navigate(route)" flat >{{ route }}</v-btn>
    </v-toolbar-items>
    <v-menu class="hidden-md-and-up">
      <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
      <v-list>
        <v-list-tile v-for="route in routes" :key="route" @click="navigate(route)" >
          <v-list-tile-title>{{ route }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
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
