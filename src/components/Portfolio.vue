<template>
  <div>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card v-for="app in apps" :key="app" class="card">
          <v-card-media :src="require(`@/assets/img/${app.img}.jpg`)" height="540" contain>
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ app.name }}</h3>
              <br />
              <div>{{ app.description }}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn color="primary" :href="app.href" target="_blank" flat>Link</v-btn>
            <v-btn color="primary" :href="app.source" target="_blank" flat>Source</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
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
        description: 'Lorem ipsum or something',
        source: 'https://github.com/acdibble/andrewdibble.com',
      },
      {
        name: 'Waggl',
        href: 'http://waggl.dog',
        img: 'waggl',
        description: 'Lorem ipsum or something',
        source: 'https://github.com/contigoers/waggl',
      },
      {
        name: 'grnfld.',
        href: 'https://grnfld.herokuapp.com',
        img: 'grnfld',
        description: 'Lorem ipsum or something',
        source: 'https://github.com/dabraintrust/grnfld',
      },
      {
        name: 'uMTV',
        href: 'https://umtv.herokuapp.com',
        img: 'umtv',
        description: 'Lorem ipsum or something',
        source: 'https://github.com/acdibble/mvp',
      },
    ],
  }),
};
</script>

<style scoped>
.card {
  margin: 50px;
}
</style>
