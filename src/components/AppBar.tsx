import MUIAppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

export default function AppBar() {
  return (
    <MUIAppBar position="static" component="nav">
      <Toolbar>
        <Button color="inherit">Sobre</Button>
      </Toolbar>
    </MUIAppBar>
  );
}
