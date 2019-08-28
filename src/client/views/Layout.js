import m from 'mithril';
import Header from './Header';

export default child => ({
  view() {
    return [
      m(Header),
      m('div', { class: 'page' }, m(child)),
      m('footer'),
    ];
  },
});
