export const requestSyllables = (word: string) => {
  console.log("fetching syllables for", word);

  return fetch(`/api/${word}`).then((res) => res.json());
};
