import m from 'mithril';
import NavButtons from './NavButtons';

export default function Navbar() {
  const showMenu = () => {
    console.log('showing');
    document.getElementsByClassName('navbar-tabs')[0].style.display = 'flex';
  };

  return {
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
