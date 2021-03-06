import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";
import AuthService from "./service/authService";
import { BrowserRouter } from "react-router-dom";
import ImgFileInput from "./components/img_file_input/img_file_input";
import UploadService from "./service/uploadService";
import Database from "./service/db";

const authService = new AuthService();
const database = new Database();
const uploadService = new UploadService(process.env.REACT_APP_CLOUD_API_KEY);

const FileInput = memo((props) => {
  return <ImgFileInput {...props} upload={uploadService} />;
});

ReactDOM.render(
  <BrowserRouter>
    <App auth={authService} ImgFileInput={FileInput} database={database} />
  </BrowserRouter>,
  document.getElementById("root")
);
