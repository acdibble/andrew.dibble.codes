import Vue from 'vue';
import Router from 'vue-router';

import Main from '@/components/Main';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Portfolio from '@/components/Portfolio';
import PageNotFound from '@/components/PageNotFound';

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
