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
        info: 'This is my personal site that I built using the vue-cli. I used Vue.js, vue-router, Vuetify, and Pug to create the front end. The back end uses a simple Express server that (as of yet) only serves the static index.html file. It is currently hosted on a Google Cloud Compute Engine running an Ubuntu 16.04 LTS VM with Nginx and PM2. It may also find itself from time to time being hosted from my RaspberryPi.',
      },
      {
        name: 'The Daily Article',
        href: 'https://article-store.herokuapp.com',
        img: 'article-store',
        description: 'A store for articles',
        source: 'https://gitub.com/acdibble/article-store',
        showInfo: false,
        info: 'A basic CRUD app for articles. The front end uses React, Redux, and Bootstrap. It runs on a MongoDB storage and uses Node with Express for the server.',
      },
      {
        name: 'Waggl',
        href: 'http://www.waggl.dog',
        img: 'waggl',
        description: 'A connection between adoptable shelter dogs and prospective owners',
        source: 'https://github.com/contigoers/waggl',
        showInfo: false,
        info: `An app conceived and created by four dog-loving software engineers with the dream of finding an easier way to connect all the shelter dogs to central site so they might get adopted more quickly. We created it using React and Redux. The styling is courtesy of Ant Design and SASS. It is running on a Koa server hosted on an Amazon Web Services EC2 instance, with the data being stored on an AWS Relational Database Service using MySQL.
        <br />
        <br />
        Shout out to my co-engineers on this project: <a href="https://github.com/jpangelle/" target="_blank">Jean Paul Angelle</a>, <a href="https://github.com/kmehta903/" target="_blank">Krisha Mehta</a>, and <a href="https://github.com/shannonpearson/" target="_blank">Shannon Pearson</a>.`,
      },
      {
        name: 'grnfld.',
        href: 'https://grnfld.herokuapp.com',
        img: 'grnfld',
        description: 'An open forum for helping aspiring coders with their questions and problems',
        source: 'https://github.com/dabraintrust/grnfld',
        showInfo: false,
        info: 'A Stack Overflow inspired clone for novice coders to post questions and get help and answers from more knowledgeable coders. It runs on AngularJS on the front end and a backing PostgreSQL database.',
      },
      {
        name: 'uMTV',
        href: 'https://umtv.herokuapp.com',
        img: 'umtv',
        description: 'A video player that allows every YouTube video to only be played once',
        source: 'https://github.com/acdibble/mvp',
        showInfo: false,
        info: 'A playlist maker that only allows YouTube videos to be played that haven\'t already been played. It uses MongoDB to store videos that have already been played.',
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
  margin: 2vw;
}
</style>
