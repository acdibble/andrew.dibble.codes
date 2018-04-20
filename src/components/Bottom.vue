<template>
  <v-footer height="auto">
    <v-layout row wrap justify-center>
      <a
        v-for="medium in media"
        :key="medium.icon"
        :href="medium.href"
        target="_blank"
      >
        <v-btn icon>
          <v-icon size="24px">
            {{ medium.icon }}
          </v-icon>
        </v-btn>
      </a>
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
    media: [
      {
        icon: 'fab fa-facebook',
        href: 'https://www.facebook.com/andrew.dibble',
      }, {
        icon: 'fab fa-github-square',
        href: 'https://github.com/acdibble',
      }, {
        icon: 'fab fa-linkedin',
        href: 'https://www.linkedin.com/in/andrewdibble/',
      }, {
        icon: 'fab fa-instagram',
        href: 'https://www.instagram.com/dynkers/',
      },
    ],
  }),
};
</script>

<style scoped>
a {
    text-decoration: none !important;
}
</style>
