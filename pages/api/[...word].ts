import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

const cors = Cors();

const notFoundRegex = /Não encontrada/;
const syllablesRegex =
  /Separação silábica: <b>([a-zA-Z\u00C0-\u00FF]+(?:-[a-zA-Z\u00C0-\u00FF]+)*)<\/b>/;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors);

  const word = req.query.word?.[0];

  if (!word) {
    res.status(400).json({ error: "Missing word parameter" });
    return;
  }

  res.status(200).json(await getSyllables(word));
}

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
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
