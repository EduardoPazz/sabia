import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Link from "next/link";

const rows = [
  ["Cesar Yamasato", "[e-mail USP]"],
  ["João Eduardo da Paz Silva", "eduardopaz@usp.br"],
  ["Kennedy Rohab Menezes da Silva", "kennedy_menezes@usp.br"],
  ["Lucas Panta de Moura", "lucaspanta007@usp.br"],
  ["Luiz Raphael Capelletto Lemos Reis", "losta@usp.br"],
  ["Roberta Vitória Borges", "robertav@usp.br"],
  ["Silas Bovolin Reis", "silas.bovolin@usp.br"],
];

const AboutPage = () => (
  <Box m={2} textAlign="justify">
    <p>
      O Sabiá é um projeto realizado por alunas e alunos do curso de Sistemas de
      Informação da Universidade de São Paulo como parte da disciplina ACH0042 -
      Resolução de Problemas II e orientado pela{" "}
      <Link href="https://each.uspnet.usp.br/sarajane/" target="_blank">
        Prof.ª Dr.ª Sarajane Marques Peres
      </Link>
      .
    </p>
    <TableContainer component={Paper}>
      <Table aria-label="tabela de alunos">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(([name, email]) => (
            <TableRow
              key={name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell>{email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <p>
      Dado a importância do combate ao analfabetismo, faz-se necessário criar
      estratégias e ferramentas para tal propósito. O objetivo do Sabiá é servir
      como ferramenta de auxílio a alfabetização por meio de técnicas de
      Speech2Text e Text2Speech, fornecendo fácil entendimento sobre fonemas e a
      fonética de uma palavra dita, sem necessidade de escrita.
    </p>
    <p>
      Esse projeto foi desenvolvido em duas partes com dependência em algumas
      tecnologias:
    </p>
    <ul>
      <li>
        Página web:
        <ul>
          <li>
            <Link target="_blank" href="https://nextjs.org/">
              Nextjs
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://www.typescriptlang.org/">
              Typescript
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://mui.com/">
              Material UI
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API"
            >
              Web Speech API
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://vercel.com/home">
              Vercel
            </Link>
          </li>
        </ul>
      </li>
      <li>
        API HTTP de separação silábica de palavras:
        <ul>
          <li>
            <Link target="_blank" href="https://nodejs.org/">
              Nodejs
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://vercel.com/features/edge-functions"
            >
              Vercel edge functions
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions"
            >
              RegExp
            </Link>
          </li>
          <li>
            <Link target="_blank" href="http://separaremsilabas.com">
              separaremsilabas.com
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  </Box>
);

export default AboutPage;
