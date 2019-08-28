<template lang="pug">
  div(id="card")
    v-layout
      v-flex(md6 offset-md3)
        v-card
          v-card-media(:src="require('assets/img/portrait.jpg')" height="300px")
          v-card-title(primary-title)
            div
              h3(class="headline mb-0") Trying to reach me?
              br
              div Please feel free to contact me via the social media in the footer or at
                |  #[a(:href="`mailto:${email}`") {{ email }}]
</template>

<script>
export default {
  name: 'Contact',
  data: () => ({
    email: 'me@andrewdibble.com',
  }),
};
</script>

<style scoped>
#card {
  margin: 4vw;
}
</style>
