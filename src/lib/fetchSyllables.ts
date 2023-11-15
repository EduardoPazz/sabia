import { extractSyllables } from "lib/extractSyllables";

const normalize = (word: string) =>
  word.normalize("NFD").replace(/\p{Mn}/gu, "");

const fetchDicio = async (word: string) =>
  fetch(`https://www.dicio.com.br/${word}`).then((res) => res.text());

export const fetchSyllables = async (word: string) =>
  fetchDicio(normalize(word)).then(extractSyllables);
