import m from 'mithril';
import Navbar from './Navbar';

export default child => ({
  view() {
    return m('div', {
      id: 'app',
      onclick(e) {
        if (!/menu-button/.test(e.path[0].className)) {
          document.getElementsByClassName('navbar-tabs')[0].style.display = 'none';
        }
      },
    }, [
      m(Navbar),
      m('div', { class: 'page' }, [
        m(child),
      ]),
      m('footer'),
    ]);
  },
});
