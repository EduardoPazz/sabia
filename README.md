# `syllables-api`

API que fornece separação silábica de palavras em português.

Exemplo de uso, utilizando a ferramenta de linha de comando `cURL`:

```sh
curl https://syllables-api.vercel.app/api/teste
```
```json
{"word":"teste","syllables":"tes-te","spelling":"t-e-s-t-e"}
```

Faz web scraping do site [Dicio](https://www.dicio.com.br/) para obter as separações silábicas.

Esta aplicação faz uso do plano gratuito da Vercel, logo, não é escalável. Para uso em produção, é recomendado que você
faça um fork e então o deploy em um servidor mais apropriado.

Feito com:

- Node.js
- Next.js
