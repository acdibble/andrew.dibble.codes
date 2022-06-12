export const getTils = async (): Promise<Record<string, string[]>> => {
  const response = await fetch(
    'https://raw.githubusercontent.com/acdibble/til/master/structure.json',
  );

  return response.json();
};

export const formatPath = (category: string, name: string): string =>
  `/tils/${category}/${name
    .replace(/`/g, '')
    .replace(/ /g, '-')}`.toLowerCase();

export const getTilsPaths = async () => {
  const tilsObject = await getTils();

  return Object.entries(tilsObject).flatMap(([category, names]) =>
    names.map((name) => formatPath(category, name)),
  );
};
