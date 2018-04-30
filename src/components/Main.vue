<template lang="pug">
  div
    h1 {{ msg }}
</template>

<script>
export default {
  name: 'Main',
  computed: {
    msg() {
      return this.$store.state.dark ? 'General Kenobi.' : 'Hello there.';
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 10vw;
  margin-top: 25vh;
  margin-left: 15vw;
}
</style>
