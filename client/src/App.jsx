// App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme"; // Make sure you have theme.js configured
import MainRouter from "../MainRouter";
import "./index.css"; // global styles

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </Router>
  );
};

export default App;
