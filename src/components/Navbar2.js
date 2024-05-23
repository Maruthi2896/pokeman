import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Typography,
  ListItemText,
  ListItemButton,
  ListItem,
  List,
  Drawer,
  Divider,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function ButtonAppBar({ mode, handleMode }) {
  const toggleMode = () => {
    handleMode();
  };
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
 

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/" style={{ textDecoration: "none", color: "#00aeff" }}>
          Cautio Pokeman Task
        </Link>
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "#00aeff" }}
              >
                About Me
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              {" "}
              <Link
                to="/pokeman"
                style={{ textDecoration: "none", color: "#00aeff" }}
              >
                Task
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              Cautio Pokeman Task
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link
              style={{
                color: "white",
                fontWeight: "bold",
                textDecoration: "none",
                margin: "30px",
              }}
              to="/about"
            >
              About Me
            </Link>
            <Link
              style={{
                color: "white",
                fontWeight: "bold",
                textDecoration: "none",
                margin: "30px",
              }}
              to="/pokeman"
            >
              Task
            </Link>
          </Box>
          <nav>
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
              }}
            >
              {drawer}
            </Drawer>
          </nav>

          {mode ? (
            <Button color="success" variant="outlined" onClick={toggleMode}>
              Light Mode
            </Button>
          ) : (
            <Button color="secondary" variant="outlined" onClick={toggleMode}>
              Dark Mode
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
