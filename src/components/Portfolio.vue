<template lang="pug">
  div
    v-container
      v-layout(wrap)
        v-flex(v-for="app in apps" :key="app.img" md6)
          v-card(class="card")
            v-card-media(:src="require(`@/assets/img/${app.img}.jpg`)" height="25vw" contain)
            v-card-title(primary-title)
              div
                h3(class="headline mb-0") {{ app.name }}
                br
                div {{ app.description }}
            v-card-actions
              v-btn(color="primary" :href="app.href" target="_blank" flat) Link
              v-btn(color="primary" :href="app.source" target="_blank" flat) Source
</template>

<script>
export default {
  name: 'Portfolio',
  data: () => ({
    apps: [
      {
        name: 'My personal site',
        href: 'https://andrewdibble.com',
        img: 'andrewdibble.com',
        description: 'What you\'re looking at right now',
        source: 'https://github.com/acdibble/andrewdibble.com',
      },
      {
        name: 'Waggl',
        href: 'http://waggl.dog',
        img: 'waggl',
        description: 'A connection between adoptable shelter dogs and prospective owners',
        source: 'https://github.com/contigoers/waggl',
      },
      {
        name: 'grnfld.',
        href: 'https://grnfld.herokuapp.com',
        img: 'grnfld',
        description: 'An open forum for helping aspiring coders with their questions and problems',
        source: 'https://github.com/dabraintrust/grnfld',
      },
      {
        name: 'uMTV',
        href: 'https://umtv.herokuapp.com',
        img: 'umtv',
        description: 'A video player that allows every YouTube video to only be played once',
        source: 'https://github.com/acdibble/mvp',
      },
    ],
  }),
};
</script>

<style scoped>
.card {
  margin: 4vh;
}
</style>
