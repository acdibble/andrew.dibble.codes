import Vue from 'vue';
import Router from 'vue-router';

import Main from '../components/Main.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';
import Portfolio from '../components/Portfolio.vue';
import PageNotFound from '../components/PageNotFound.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    }, {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio,
    }, {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    }, {
      path: '/about',
      name: 'About',
      component: About,
    }, {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound,
    },
  ],
});
