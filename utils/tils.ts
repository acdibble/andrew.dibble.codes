export const getTils = async (): Promise<Record<string, string[]>> => {
  const response = await fetch(
    'https://raw.githubusercontent.com/acdibble/til/master/structure.json',
  );

  return response.json();
};

const escapeSpaces = (string: string): string => string.replace(/ /g, '-');

export const formatPath = (category: string, name: string): string =>
  `/tils/${escapeSpaces(category)}/${escapeSpaces(name).replace(
    /[`.]/g,
    '',
  )}`.toLowerCase();

export const getTilsPaths = async () => {
  const tilsObject = await getTils();

  return Object.entries(tilsObject).flatMap(([category, names]) =>
    names.map((name) => formatPath(category, name)),
  );
};
