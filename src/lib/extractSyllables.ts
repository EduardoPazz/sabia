const SYLLABLES_REGEX =
  /<font color="#0018BF" style="font-size:1\.9em">(.+?)(?=<\/font>)/g;

export const extractSyllables = (html: string) =>
  Array.from(html.matchAll(SYLLABLES_REGEX))
    .map((m) => m[1])
    .join("-");
