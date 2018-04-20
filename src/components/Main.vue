<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Hello there.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  width:800px;
  height: 200px; line-height: 200px;
  position: absolute;
  top: 50%; margin-top:-100px;
  left: 50%; margin-left:-400px;
  font-size: 100px;
}
</style>
