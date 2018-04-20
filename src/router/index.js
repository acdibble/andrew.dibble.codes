import Vue from 'vue';
import Router from 'vue-router';

import Main from '@/components/Main';
import Contact from '@/components/Contact';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    }, {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ],
});
