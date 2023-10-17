export const normalize = (word: string) =>
    word.normalize("NFD").replace(/\p{Mn}/gu, "");

export const toObject = (acc: {}, curr: {}) => ({ ...acc, ...curr });
