<template lang="pug">
  div
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
      apps: [],
      isLoading: true,
    };
  },
  computed: {
    resize() {
      return { column: this.$vuetify.breakpoint.smAndDown };
    },
  },
  created() {
    fetch('/api/portfolios')
      .then(res => res.json())
      .then((apps) => {
        this.apps = apps;
        // this.isLoading = false;
      });
  },
};
</script>

<style scoped>
.card {
  margin: 2vw;
}

.spinner {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
}
</style>
