import React from "react";
import Button from "../button/button";
import ImgFileInput from "../img_file_input/img_file_input";
import styles from "./card_info.module.css";

const CardInfo = ({ card }) => {
  const { name, company, theme, job, email, comment, fileName } = card;
  return (
    <form className={styles.form}>
      <input className={styles.input} value={name} type="text" />
      <input className={styles.input} value={company} type="text" />
      <select name="theme" className={styles.select} value={theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input className={styles.input} value={job} type="text" />
      <input className={styles.input} value={email} type="text" />
      <textarea
        name="comment"
        className={styles.textarea}
        value={comment}
      ></textarea>
      <div className={styles.fileInput}>
        <ImgFileInput name={fileName}></ImgFileInput>
      </div>
      <div className={styles.delete}>
        <Button name={"Delete"}></Button>
      </div>
    </form>
  );
};

export default CardInfo;
