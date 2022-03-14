import React from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE = "/images/default_logo.png";

const Card = ({ card }) => {
  const { name, company, theme, job, email, comment, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE;
  console.log(fileURL);
  return (
    <li className={`${styles.container} ${pickStyles(theme)}`}>
      <img className={styles.img} src={url} alt="profile photo" />
      <div className={styles.metadata}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.job}>{job}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.comment}>{comment}</p>
      </div>
    </li>
  );
};

export default Card;

function pickStyles(theme) {
  switch (theme) {
    case "Light":
      return styles.light;
    case "Dark":
      return styles.dark;
    case "Colorful":
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}
