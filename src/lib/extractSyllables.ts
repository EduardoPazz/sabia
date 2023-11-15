const SYLLABLES_REGEX =
  /Separação silábica: <b>([a-zA-Z\u00C0-\u00FF]+(?:-[a-zA-Z\u00C0-\u00FF]+)*)<\/b>/;

export const extractSyllables = (html: string) =>
  html.match(SYLLABLES_REGEX)?.[1];
