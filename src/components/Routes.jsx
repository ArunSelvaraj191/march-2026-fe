import { Box } from "@mui/material";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../modules/Home";
import Login from "../modules/Login";
import Project from "../modules/Project";
import Register from "../modules/Register";
import Skills from "../modules/Skills";
import Users from "../modules/Users";
import { ThemeContext } from "./ThemeContext";

const Router = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: theme === "light" ? "#fff" : "#333",
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Box>
  );
};

export default Router;
