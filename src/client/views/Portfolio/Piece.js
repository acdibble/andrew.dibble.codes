import m from 'mithril';

export default {
  view(vnode) {
    const {
      name,
      // ...rest
    } = vnode.attrs;
    // console.log(rest);
    return m('li', m('div', [
      m('h2', name),
    ]));
  },
};
