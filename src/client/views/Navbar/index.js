import m from 'mithril';
import NavButtons from './NavButtons';

export default {
  view() {
    return m('header', [
      m('div', { class: 'navbar-container' }, [
        m('h1', { class: 'navbar-brand' }, 'Welcome'),
      ]),
      m('nav', m(NavButtons)),
    ]);
  },
};
