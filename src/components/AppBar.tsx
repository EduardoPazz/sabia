import MenuIcon from "@mui/icons-material/Menu";
import MUIAppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";

export default function AppBar() {
  return (
    <MUIAppBar position="static" component="nav">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </MUIAppBar>
  );
}
