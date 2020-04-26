
const wrappedFetch = (url, type) => fetch(url)
  .then((res) => {
    if (res.ok) return res[type]();
      throw new Error(res.statusText);
  });

let structure;

export const getStructure = () => {
  if (!structure) {
    structure = wrappedFetch(
      "https://raw.githubusercontent.com/acdibble/til/master/structure.json",
      'json',
    );
  }

  return structure;
}

const tiles = {};

const buildUrl = (key) => `https://raw.githubusercontent.com/acdibble/til/master/${key}`;

export const getTile = async (category, name) => {
  const key = `${category}/${name.replace(/`/g, '').replace(/ /g, '-')}.md`.toLowerCase();
  if (!tiles[key]) {
    const url = buildUrl(key);
    const tile = await wrappedFetch(url, 'text');
    // const indexOfCodeBlock = tile.indexOf('```');
    tiles[key] = tile.slice(tile.indexOf('\n') + 1)
      .replace(/```\w+(.+?)```/gs, (_, m) => `<pre><code>${m}</code></pre>`)
      .replace(/`(.+?)`/g, (_, m) => `<pre style="display: inline;"><strong>${m}</strong></pre>`)
      .replace(/\[([^\]]+?)\]\((.+?)\)/g, (_, m1, m2) => (/\.md$/.test(m2)
        ? m1
        : `<a href=${m2} target="_blank">${m1}</a>`))
      .replace(/\[\d\]/g, (m) => `\n${m}`).trim()
  }

  return { content: tiles[key], url: `https://github.com/acdibble/til/blob/master/${key}` };
}
