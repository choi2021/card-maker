import React from "react";
import CardInfo from "../card_info/card_info";
import styles from "./editor.module.css";

const Editor = ({ cards }) => {
  console.log(cards);
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Editor</h1>
      <ul className={styles.list}>
        {cards.map((card) => (
          <CardInfo card={card} key={card.id} />
        ))}
      </ul>
    </section>
  );
};

export default Editor;
