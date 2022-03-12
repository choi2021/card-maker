import React from "react";
import Card from "../card/card";
import styles from "./preview.module.css";

const Preview = ({ cards }) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.list}>
        {cards.map((card) => (
          <Card card={card} key={card.id}></Card>
        ))}
      </ul>
    </section>
  );
};
export default Preview;
