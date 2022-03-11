import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";
import AuthService from "./service/authService";
import { BrowserRouter } from "react-router-dom";

const authService = new AuthService();

ReactDOM.render(
  <BrowserRouter>
    <App auth={authService} />
  </BrowserRouter>,
  document.getElementById("root")
);
