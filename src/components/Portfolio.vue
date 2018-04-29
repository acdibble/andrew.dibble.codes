<template lang="pug">
  div
    v-container
      v-layout(wrap v-bind="resize")
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
              v-spacer
              v-btn(icon @click.native="app.showInfo = !app.showInfo")
                v-icon {{ app.showInfo ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
            v-slide-y-transition
              v-card-text(v-show="app.showInfo" v-html="app.info")
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
        showInfo: false,
        info: `This is my personal site that I built using the vue-cli. I used Vue.js, vue-router, \
          Vuetify, and Pug to create the front end. The back end uses a simple Express server that \
          (as of yet) only serves the static index.html file.
          <br />
          <br />
          A tip of the hat to Shannon and JP, who have served as my third, fourth, fifth, and sixth \
          eyeballs on this site for me. Thanks to Charlie as well for  having introduced me to Vue \
          and giving me the 10,000 foot view.`,
      },
      {
        name: 'Waggl',
        href: 'http://waggl.dog',
        img: 'waggl',
        description: 'A connection between adoptable shelter dogs and prospective owners',
        source: 'https://github.com/contigoers/waggl',
        showInfo: false,
        info: 'Some more lorem ipsum or something',
      },
      {
        name: 'grnfld.',
        href: 'https://grnfld.herokuapp.com',
        img: 'grnfld',
        description: 'An open forum for helping aspiring coders with their questions and problems',
        source: 'https://github.com/dabraintrust/grnfld',
        showInfo: false,
        info: 'Some more lorem ipsum or something',
      },
      {
        name: 'uMTV',
        href: 'https://umtv.herokuapp.com',
        img: 'umtv',
        description: 'A video player that allows every YouTube video to only be played once',
        source: 'https://github.com/acdibble/mvp',
        showInfo: false,
        info: 'Some more lorem ipsum or something',
      },
    ],
  }),
  computed: {
    resize() {
      return { column: this.$vuetify.breakpoint.smAndDown };
    },
  },
};
</script>

<style scoped>
.card {
  margin: 4vh;
}
</style>
