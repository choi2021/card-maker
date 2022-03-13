import React from "react";
import Button from "../button/button";
import ImgFileInput from "../img_file_input/img_file_input";
import styles from "./card_info.module.css";

const CardInfo = ({ card, onDelete, onUpdate }) => {
  const { name, company, theme, job, email, comment, fileName } = card;
  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(card);
  };
  const updateCard = (e) => {
    if (e.currentTarget === null) {
      return;
    }
    const { name, value } = e.target;
    onUpdate({ ...card, [name]: value });
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        name="name"
        value={name}
        type="text"
        onChange={updateCard}
      />
      <input
        className={styles.input}
        value={company}
        name="company"
        type="text"
        onChange={updateCard}
      />
      <select
        name="theme"
        className={styles.select}
        value={theme}
        onChange={updateCard}
      >
        <option value="Light">Light</option>
        <option value="Dark">Dark</option>
        <option value="Colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        value={job}
        name="job"
        type="text"
        onChange={updateCard}
      />
      <input
        className={styles.input}
        value={email}
        name="email"
        type="text"
        onChange={updateCard}
      />
      <textarea
        name="comment"
        className={styles.textarea}
        value={comment}
        onChange={updateCard}
      ></textarea>
      <div className={styles.fileInput}>
        <ImgFileInput name={fileName}></ImgFileInput>
      </div>
      <div className={styles.delete}>
        <Button name={"Delete"} onClick={handleDelete}></Button>
      </div>
    </form>
  );
};

export default CardInfo;
