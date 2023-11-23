import { Stack } from "@mui/material";
import MUIAppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function AppBar() {
  return (
    <MUIAppBar position="static" component="nav">
      <Stack justifyContent="space-between" flexDirection="row" m={1}>
        <Button color="inherit">Logo</Button>
        <Stack flexDirection="row">
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
