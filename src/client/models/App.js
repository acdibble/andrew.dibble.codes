import m from 'mithril';
import mocks from '../../../mock';


const App = {
  list: [],
  loadList() {
    return m.request('api/apps')
      .then(res => res.json())
      .catch(() => mocks)
      .then((apps) => {
        App.list = apps.map(({ img, ...rest }) => rest);
      });
  },
};

export default App;
