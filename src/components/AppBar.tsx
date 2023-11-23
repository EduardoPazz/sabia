import { Stack, Typography } from "@mui/material";
import MUIAppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";
import parrot from "../../public/parrot.png";

export default function AppBar() {
  return (
    <MUIAppBar position="static" component="nav">
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
        <Stack flexDirection="row" gap={1}>
          <Link href="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="/sobre">
            <Button color="inherit">Sobre</Button>
          </Link>
        </Stack>
      </Stack>
    </MUIAppBar>
  );
}
