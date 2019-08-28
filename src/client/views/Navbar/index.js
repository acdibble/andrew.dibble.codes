import m from 'mithril';
import NavButtons from './NavButtons';

export default function Navbar() {
  const hideMenu = (e) => {
    if (!e.path[0].className.includes('menu-button')) {
      document.getElementsByClassName('navbar-tabs')[0].style.display = 'none';
      document.removeEventListener('click', hideMenu);
    }
  };

  const showMenu = () => {
    document.getElementsByClassName('navbar-tabs')[0].style.display = 'flex';
    document.addEventListener('click', hideMenu);
  };

  return {
    onremove() {
      document.removeEventListener('click', hideMenu);
    },
    view() {
      return m('header', [
        m('div', { class: 'navbar-container' }, [
          m('h1', { class: 'navbar-brand' }, 'Welcome'),
        ]),
        m('nav', { class: 'navbar-tab-container' }, [
          m('i', {
            class: 'fas fa-bars menu-button',
            onclick: showMenu,
          }),
          m(NavButtons),
        ]),
      ]);
    },
  }
  ;
}
