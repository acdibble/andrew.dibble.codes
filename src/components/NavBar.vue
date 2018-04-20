<template>
  <v-toolbar>
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title>Welcome</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Portfolio</v-btn>
      <v-btn @click="handleClick">Contact</v-btn>
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
      }
    },
  },
};
</script>

