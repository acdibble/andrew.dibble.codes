<template>
  <v-toolbar>
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title>Welcome</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click="handleClick">Home</v-btn>
      <v-btn flat @click="handleClick">Portfolio</v-btn>
      <v-btn flat @click="handleClick">Contact</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    handleClick({ target }) {
      if (target.innerText === 'HOME') {
        this.$router.push('/');
      } else {
        this.$router.push('/soon');
      }
    },
  },
};
</script>
