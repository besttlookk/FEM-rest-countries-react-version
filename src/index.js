import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./styles/index.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import AppProvider from "./contexts/appContext";

ReactDOM.render(
  <Router>
    <AppProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AppProvider>
  </Router>,
  document.getElementById("root")
);
