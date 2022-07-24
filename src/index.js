import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "react-router-dom";
import "./styles/app.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
