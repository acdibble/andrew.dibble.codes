export const getStructureFile = async (): Promise<Record<string, string[]>> => {
  const res = await fetch('https://raw.githubusercontent.com/acdibble/til/master/structure.json');

  return res.json();
};

export const formatId = (category: string, title: string): string => {
  const name = title.replace(/`/g, '').replace(/ /g, '-');
  return `${category.replace(/ /g, '-')}/${name}.md`.toLowerCase();
};

export const keys = Object.keys as <T>(obj: T) => (keyof T)[];
