import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";
import AuthService from "./service/authService";
import { BrowserRouter } from "react-router-dom";
import ImgFileInput from "./components/img_file_input/img_file_input";
import UploadService from "./service/uploadService";

const authService = new AuthService();
const uploadService = new UploadService(process.env.REACT_APP_CLOUD_API_KEY);

const FileInput = (props) => {
  return <ImgFileInput {...props} upload={uploadService} />;
};

ReactDOM.render(
  <BrowserRouter>
    <App auth={authService} ImgFileInput={FileInput} />
  </BrowserRouter>,
  document.getElementById("root")
);
