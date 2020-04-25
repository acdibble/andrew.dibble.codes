
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

export const getTile = (category, name) => {
  const key = `${category}/${name.replace(/`/g, '').replace(/ /g, '-')}.md`.toLowerCase();
  if (!tiles[key]) {
    tiles[key] = wrappedFetch(buildUrl(key), 'text');
  }
    console.log(tiles[key])
  return tiles[key];
}
