import React from "react";
import styles from "./img_file_input.module.css";

const ImgFileInput = ({ name, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {name}
    </button>
  );
};

export default ImgFileInput;
