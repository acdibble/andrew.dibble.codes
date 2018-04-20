<template>
  <v-toolbar>
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title>Welcome</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click="handleClick">Home</v-btn>
      <v-btn flat>Portfolio</v-btn>
      <v-btn flat @click="handleClick">Contact</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    handleClick({ target }) {
      if (target.innerText === 'CONTACT') {
        this.$router.push('/contact');
      } else if (target.innerText === 'HOME') {
        this.$router.push('/');
      }
    },
  },
};
</script>

