import m from 'mithril';
import App from '../../models/App';
import Piece from './Piece';

export default {
  oninit: App.loadList,
  view() {
    if (App.initialized) {
      return m('ul', App.list.map(app => m(Piece, app)));
    }
    if (!App.encounteredError) {
      return m('div', 'Loading...');
    }

    return m('div', 'Got an error :(');
  },
};
