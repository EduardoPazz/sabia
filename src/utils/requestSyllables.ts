export const requestSyllables = (word: string) =>
  fetch(`/api/${word}`).then((res) => res.json() as Promise<string>);
