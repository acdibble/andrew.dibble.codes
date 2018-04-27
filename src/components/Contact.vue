<template>
  <div id="card">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media :src="require('@/assets/img/portrait.jpg')" height="300px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Trying to reach me?</h3>
              <br />
              <div>Please feel free to contact me via the social media in the footer or at
                <a :href="'mailto:' + email">{{ email }}</a>.</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      email: 'me@andrewdibble.com',
    };
  },
};
</script>

<style scoped>
h1 {
  width:800px;
  height: 200px; line-height: 200px;
  position: absolute;
  top: 50%; margin-top:-100px;
  left: 50%; margin-left:-400px;
  font-size: 100px;
}

#card {
  margin: 50px;
}
</style>
