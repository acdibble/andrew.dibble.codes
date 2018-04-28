<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    msg: 'Hello there.',
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 10vw;
  margin-top: 25vh;
  margin-left: 15vw;
}
</style>
