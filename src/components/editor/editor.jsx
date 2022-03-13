import React from "react";
import AddForm from "../add_form/add_form";
import CardInfo from "../card_info/card_info";
import styles from "./editor.module.css";

const Editor = ({ cards, onAdd }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Editor</h1>
      <ul className={styles.list}>
        {cards.map((card) => (
          <CardInfo card={card} key={card.id} />
        ))}
        <AddForm onAdd={onAdd}></AddForm>
      </ul>
    </section>
  );
};

export default Editor;
