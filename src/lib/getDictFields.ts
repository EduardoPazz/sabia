import { EXTRACTORS } from "lib/extractors";
import { normalize, toObject } from "lib/utils";

const fetchDicio = async (word: string) =>
  fetch(`https://www.dicio.com.br/${word}`).then((res) => res.text());

const extractField = (html: string) => (field: string) => {
  const extractor = EXTRACTORS.get(field);

  if (!extractor) {
    throw new Error(`No mapped extractor for field: ${field}`);
  }

  return { [field]: extractor(html) };
};

export async function getDictFields(word: string, fields: string[]) {
  const html = await fetchDicio(normalize(word));

  return fields.map(extractField(html)).reduce(toObject, {});
}
