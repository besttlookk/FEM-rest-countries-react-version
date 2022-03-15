import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./styles/index.scss";
import { ThemeProvider } from "./ThemeContext";
ReactDOM.render(
  <Router>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
