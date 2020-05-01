import { writable, readable } from 'svelte/store';

let request;

export const structure = readable(null, (set) => {
  if (!request) {
    request = fetch(
      "https://raw.githubusercontent.com/acdibble/til/master/structure.json"
    ).then(res => {
      if (res.ok) return res.json();
      throw new Error(res.statusText);
    });
  }

  set(request);

  return () => {};
});

export const section = writable('About');
