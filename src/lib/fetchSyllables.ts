import { extractSyllables } from "lib/extractSyllables";

const fetchExternalSource = async (word: string) =>
  fetch(`https://www.separaremsilabas.com/index.php?p=${word}`).then((res) =>
    res.text(),
  );

export const fetchSyllables = async (word: string) =>
  fetchExternalSource(word).then(extractSyllables);
