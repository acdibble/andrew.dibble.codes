import m from 'mithril';
import Home from './views/Home';
import Portfolio from './views/Portfolio';
import Layout from './views/Layout';

m.route(document.body, '/', {
  '/': Layout(Home),
  '/portfolio': Layout(Portfolio),
});
