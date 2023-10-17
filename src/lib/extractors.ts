import { SYLLABLES_REGEX } from "lib/regex";

const extractSyllables = (html: string) => html.match(SYLLABLES_REGEX)?.[1];

export const EXTRACTORS = new Map([["syllables", extractSyllables]]);
