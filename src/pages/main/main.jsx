import React, { useEffect, useState } from "react";
import CardPreview from "../../components/preview/preview";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import styles from "./main.module.css";
import Editor from "../../components/editor/editor";

const Main = ({ logout }) => {
  const [cards, setCards] = useState([
    {
      name: "Ellie",
      company: "Samsung",
      theme: "Dark",
      job: "SW engineer",
      email: "dream.coder@gmail.com",
      comment: "Dont't forget to code your dream",
      fileName: "ellie",
      fileURL: null,
      id: 1,
    },
    {
      name: "Bob",
      company: "Uber",
      theme: "Light",
      job: "SW engineer",
      email: "bog@gmail.com",
      comment: "Dont't forget to code your dream",
      fileName: "ellie",
      fileURL: null,
      id: 2,
    },
    {
      name: "Ellie",
      company: "Samsung",
      theme: "Colorful",
      job: "SW engineer",
      email: "dream.coder@gmail.com",
      comment: "Dont't forget to code your dream",
      fileName: "ellie",
      fileURL: null,
      id: 3,
    },
  ]);

  return (
    <section className={styles.main}>
      <Header onLogout={logout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <CardPreview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Main;
