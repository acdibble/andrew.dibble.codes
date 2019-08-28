import m from 'mithril';

const routes = ['Home', 'About', 'Portfolio', 'Contact'];

export default {
  view() {
    return m('header', [
      m('nav', m('ul', routes.map((route) => {
        const href = route === 'Home' ? '/' : `/${route.toLowerCase()}`;
        return m('li', m(m.route.Link, { href }, route));
      }))),
    ]);
  },
};
