import m from 'mithril';
import mocks from '../../../mock';

const App = {
  list: [],
  initialized: false,
  encounteredError: false,
  loadList() {
    if (!App.initialized) {
      return m.request('api/apps')
        .then(res => res.json())
        .catch(() => new Promise(resolve => setTimeout(resolve, 1000, mocks)))
        .then((apps) => {
          console.log('loaded apps');
          App.list = apps.map(({ img, ...rest }) => rest);
          App.initialized = true;
        })
        .catch(() => {
          App.initialized = true;
          App.encounteredError = true;
        });
    }
  },
};

export default App;
