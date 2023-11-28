import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton, Stack, Typography } from "@mui/material";
import MUIAppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";
import parrot from "../../public/parrot.png";

export const AppBar = () => (
  <MUIAppBar position="sticky" component="nav">
    <Stack
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      m={1}
      pl={1}
    >
      <Stack flexDirection="row" alignItems="center" gap={0.5}>
        <Image src={parrot} alt="paraguaio" height={30} />
        <Typography>Sabiá</Typography>
      </Stack>
      <Stack flexDirection="row" gap={0.5} alignItems="center">
        <Link href="/">
          <Button color="inherit">Início</Button>
        </Link>
        <Link href="/sobre">
          <Button color="inherit">Sobre</Button>
        </Link>
        <Link href="https://github.com/EduardoPazz/sabia" target="_blank">
          <IconButton color="inherit">
            <GitHubIcon />
          </IconButton>
        </Link>
      </Stack>
    </Stack>
  </MUIAppBar>
);
