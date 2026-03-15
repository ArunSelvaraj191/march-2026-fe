import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Router from "./components/Routes";
import { ThemeProvider } from "./components/ThemeContext";

const App = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext);
  // console.log("Current theme in App:", theme);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
