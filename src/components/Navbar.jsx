import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log("Current theme:", theme);
  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/projects")}>
              Projects
            </Button>
            <Button color="inherit" onClick={() => navigate("/skills")}>
              Skills
            </Button>
          </Box>
          <Box>
            <IconButton
              onClick={toggleTheme}
              color="inherit"
              aria-label="toggle theme"
            >
              {theme === "light" ? <NightlightIcon /> : <LightModeIcon />}
            </IconButton>
            <Button color="inherit" onClick={() => navigate("/login")}>
              Logout
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
