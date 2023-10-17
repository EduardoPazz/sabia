import { EXTRACTORS } from "lib/extractors";
import { FIELD_SEPARATOR_REGEX } from "lib/regex";

const EXTRACTORS_KEYS_ARRAY = Array.from(EXTRACTORS.keys());
const EXTRACTORS_KEYS_SET = new Set(EXTRACTORS_KEYS_ARRAY);

export function parseFields(fieldsString: string | null) {
  const fieldsArray = fieldsString
    ?.split(FIELD_SEPARATOR_REGEX)
    .filter((field) => field && EXTRACTORS_KEYS_SET.has(field));

  return (
    fieldsString?.length ? fieldsArray : EXTRACTORS_KEYS_ARRAY
  ) as string[];
}
