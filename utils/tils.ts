export const getTils = async (): Promise<Record<string, string[]>> => {
  const response = await fetch(
    'https://raw.githubusercontent.com/acdibble/til/master/structure.json',
  );

  return response.json();
};

const escape = (string: string): string =>
  string.replace(/[`.]/g, '').replace(/ /g, '-');

export const formatPath = (category: string, name: string): string =>
  `/tils/${escape(category)}/${escape(name)}`.toLowerCase();

export const getTilsPaths = async () => {
  const tilsObject = await getTils();

  return Object.entries(tilsObject).flatMap(([category, names]) =>
    names.map((name) => formatPath(category, name)),
  );
};
