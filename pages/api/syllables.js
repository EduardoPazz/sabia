const notFoundRegex = /Não encontrada/;
const syllablesRegex = /Separação silábica: <b>([a-zA-Z\u00C0-\u00FF]+(?:-[a-zA-Z\u00C0-\u00FF]+)*)<\/b>/;

async function getSyllables(word) {

    const html = await fetchDicio(word.normalize('NFD').replace(/\p{Mn}/gu, ""));

    if (!html || notFoundRegex.test(html)) {
        console.error(`Palavra ${word} não encontrada: ${html}`);
        return null
    }

    return {
        word,
        syllables: html.match(syllablesRegex)[1],
        spelling: word.split('').join('-'),
    };
}

async function fetchDicio(word) {
    return fetch(`https://www.dicio.com.br/${word}`)
        .then(res => res.text())
        .catch((error) => {
            console.error(`Erro ao buscar a palavra ${word}: ${error}`);
            return null;
        });
    ;
}

export default async function handler(req, res) {
    res.status(200).json(await getSyllables(req.query.word));
}
