import { EXTRACTORS } from "lib/extractors";
import { normalize, toObject } from "lib/utils";

const fetchDicio = async (word: string) =>
  fetch(`https://www.dicio.com.br/${word}`).then((res) => res.text());

const extractField = (html: string) => (field: string) => {
  const extractor = EXTRACTORS.get(field);

  if (!extractor) {
    throw new Error(`No mapped extractor for field: ${field}`);
  }

  const extractedField = extractor(html);

  return extractedField && { [field]: extractedField };
};

export async function getDictFields(word: string, fields: string[]) {
  const html = await fetchDicio(normalize(word));

  const extractedFields = fields
    .map(extractField(html))
    .filter(Boolean) as unknown as Record<string, string>[];

  return extractedFields.length && extractedFields.reduce(toObject, {});
}
