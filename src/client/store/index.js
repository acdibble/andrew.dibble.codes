import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dark: false,
    apps: [],
  },
  mutations: {
    toggle(state) {
      state.dark = !state.dark;
    },
    setApps(state, apps) {
      state.apps = apps;
    },
  },
  actions: {
    getApps({ commit }) {
      return fetch('/api/apps')
        .then(res => res.json())
        .then((apps) => {
          commit('setApps', apps);
        });
    },
  },
  getters: {
    apps({ apps }) {
      return apps;
    },
  },
});
