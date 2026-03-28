import { Avatar, Box, Container, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Container sx={{ textAlign: "center", padding: 4 }}>
      <Box
        sx={{
          mb: 4,
        }}
      >
        <Avatar
          src="https://avatars.githubusercontent.com/u/12345678?v=4"
          alt="Profile Picture"
          sx={{ width: 150, height: 150, margin: "0 auto" }}
        />
      </Box>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        color={theme === "light" ? "textPrimary" : "textSecondary"}
      >
        {user?.username ? `I'm ${user?.username}` : "Welcome"}
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        color={theme === "light" ? "textPrimary" : "textSecondary"}
      >
        Hi! I'm [Your Name], a passionate developer with experience in building
        web applications using the MERN stack. This portfolio showcases some of
        my projects and skills. Feel free to explore and contact me for any
        opportunities!
      </Typography>
    </Container>
  );
};

export default Home;
