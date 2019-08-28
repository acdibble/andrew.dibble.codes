import m from 'mithril';

export default function NavButtons() {
  const routes = ['Home', 'About', 'Portfolio', 'Contact'];

  return {
    view() {
      return m('ul', { class: 'navbar-container' }, routes.map((route) => {
        const href = route === 'Home' ? '/' : `/${route.toLowerCase()}`;
        const className = m.route.get() === href ? 'active-tab' : null;
        return m('li', { class: className }, [
          m(m.route.Link, { href }, route),
        ]);
      }));
    },
  };
}
