const notFoundRegex = /Não encontrada/;
const syllablesRegex =
  /Separação silábica: <b>([a-zA-Z\u00C0-\u00FF]+(?:-[a-zA-Z\u00C0-\u00FF]+)*)<\/b>/;

export const runtime = "edge";

export async function GET(
  _: unknown,
  { params }: { params: { word: string } },
) {
  const { word } = params;

  return Response.json(await getSyllables(word), {
    status: 200,
    headers: {
      "Cache-Control": "public,max-age=31536000,immutable",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
    },
  });
}

async function getSyllables(word: string) {
  const html = await fetchDicio(word.normalize("NFD").replace(/\p{Mn}/gu, ""));

  if (!html || notFoundRegex.test(html)) {
    console.error(`Palavra ${word} não encontrada: ${html}`);
    return null;
  }

  return {
    word,
    syllables: html.match(syllablesRegex)?.[1],
    spelling: word.split("").join("-"),
  };
}

async function fetchDicio(word: string) {
  return fetch(`https://www.dicio.com.br/${word}`)
    .then((res) => res.text())
    .catch((error) => {
      console.error(`Erro ao buscar a palavra ${word}: ${error}`);
      return null;
    });
}
