import React, { useEffect, useState } from "react";
import CardPreview from "../../components/preview/preview";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import styles from "./main.module.css";
import Editor from "../../components/editor/editor";

const Main = ({ logout, ImgFileInput }) => {
  const [cards, setCards] = useState({
    1: {
      id: 1,
      name: "Ellie",
      company: "Samsung",
      theme: "Dark",
      job: "SW engineer",
      email: "dream.coder@gmail.com",
      comment: "Dont't forget to code your dream",
      fileName: "ellie",
      fileURL: null,
    },
    2: {
      id: 2,
      name: "Bob",
      company: "Uber",
      theme: "Light",
      job: "SW engineer",
      email: "bog@gmail.com",
      comment: "Dont't forget to code your dream",
      fileName: "ellie",
      fileURL: null,
    },
    3: {
      id: 3,
      name: "Ellie",
      company: "Samsung",
      theme: "Colorful",
      job: "SW engineer",
      email: "dream.coder@gmail.com",
      comment: "Dont't forget to code your dream",
      fileName: "ellie",
      fileURL: null,
    },
  });

  const createOrUpdateForm = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteForm = (card) => {
    setCards((cards) => {
      const willUpdated = { ...cards };
      delete willUpdated[card.id];
      return willUpdated;
    });
  };

  return (
    <section className={styles.main}>
      <Header onLogout={logout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          onAdd={createOrUpdateForm}
          onDelete={deleteForm}
          onUpdate={createOrUpdateForm}
          ImgFileInput={ImgFileInput}
        />
        <CardPreview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Main;
