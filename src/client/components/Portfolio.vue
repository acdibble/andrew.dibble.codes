<template lang="pug">
  div
    v-alert(:value="error" type="error") Sorry! I couldn't fetch the portfolio pieces. :(
    v-container(v-if="!isLoading")
      v-layout(wrap v-bind="resize")
        v-flex(v-for="app in apps" :key="app.img" md6)
          v-card(class="card")
            v-card-media(:src="`data:image/jpeg;base64, ${app.img}`" height="25vw" contain)
            v-card-title(primary-title)
              div
                h3(class="headline mb-0") {{ app.name }}
                br
                div {{ app.description }}
            v-card-actions
              v-btn(v-if="app.href" color="primary" :href="app.href" target="_blank" flat) Link
              v-btn(color="primary" :href="app.source" target="_blank" flat) Source
              v-spacer
              v-btn(icon @click.native="app.showInfo = !app.showInfo")
                v-icon {{ app.showInfo ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
            v-slide-y-transition
              v-card-text(v-show="app.showInfo" v-html="app.info")
    div(v-if="isLoading" class="spinner")
      v-progress-circular(:size="100" color="black" indeterminate)
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      isLoading: !this.$store.getters.apps.length,
      error: false,
    };
  },
  computed: {
    resize() {
      return { column: this.$vuetify.breakpoint.smAndDown };
    },
    apps() {
      return this.$store.getters.apps;
    },
  },
  created() {
    if (!this.$store.getters.apps.length) {
      this.isLoading = true;
      this.$store.dispatch('getApps')
        .then(() => {
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
          this.error = true;
        });
    }
  },
};
</script>

<style scoped>
.card {
  margin: 2vw;
}
</style>
