import React from "react";
import AddForm from "../add_form/add_form";
import CardInfo from "../card_info/card_info";
import styles from "./editor.module.css";

const Editor = ({ cards, onAdd, onDelete, onUpdate, ImgFileInput }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Editor</h1>
      <ul className={styles.list}>
        {Object.keys(cards).map((id) => (
          <CardInfo
            card={cards[id]}
            key={id}
            id={id}
            onDelete={onDelete}
            onUpdate={onUpdate}
            ImgFileInput={ImgFileInput}
          />
        ))}
        <AddForm onAdd={onAdd} ImgFileInput={ImgFileInput}></AddForm>
      </ul>
    </section>
  );
};

export default Editor;
