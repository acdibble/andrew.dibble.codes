<template>
  <v-footer height="auto">
      <v-layout row wrap justify-center>
        <v-btn
          v-for="icon in icons"
          :id="icon.split('-')[1]"
          :key="icon"
          icon
          @click="handleClick($event)"
        >
          <v-icon
            :id="icon.split('-')[1]"
            size="24px"
          >
            {{ icon }}
          </v-icon>
        </v-btn>
      <v-flex xs12 py-3 text-xs-center>
        &copy; {{ new Date().getFullYear() }} — <strong>Andrew Dibble</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>


<script>
export default {
  name: 'Bottom',
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-github',
      'fab fa-linkedin',
      'fab fa-instagram',
    ],
  }),
  methods: {
    handleClick: e => console.log(e.target.childNodes[0].id), // eslint-disable-line
  },
};
</script>
