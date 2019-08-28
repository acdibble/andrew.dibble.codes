import m from 'mithril';
import Navbar from './Navbar';

export default child => ({
  view() {
    return m('div', { id: 'app' }, [
      m(Navbar),
      m('div', { class: 'page' }, [
        m(child),
      ]),
      m('footer'),
    ]);
  },
});
