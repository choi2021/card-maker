import React, { useEffect } from "react";
import CardPreview from "../../components/preview/preview";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import styles from "./main.module.css";
import Editor from "../../components/editor/editor";

const Main = ({ logout }) => {
  return (
    <section className={styles.main}>
      <Header onLogout={logout} />
      <div className={styles.container}>
        <Editor />
        <CardPreview />
      </div>
      <Footer />
    </section>
  );
};

export default Main;
