import m from 'mithril';
import App from '../models/App';

export default {
  oninit: App.loadList,
  view() {
    return m('ul', App.list.map(app => m('li', JSON.stringify(app))));
  },
};
