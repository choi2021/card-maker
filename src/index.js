import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";
import AuthService from "./service/authService";

const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App auth={authService} />
  </React.StrictMode>,
  document.getElementById("root")
);
