const SYLLABLES_REGEX =
  /<font color="#0018BF" style="font-size:1\.9em">(.+?)(?=<\/font>)/;

const INNER_TAGS_REGEX = /<.+?>/g;

export const extractSyllables = (html: string) =>
  html.match(SYLLABLES_REGEX)?.[1].replace(INNER_TAGS_REGEX, "");
