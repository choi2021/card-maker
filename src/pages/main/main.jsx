import React, { useEffect } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import styles from "./main.module.css";

const Main = ({ logout }) => {
  return (
    <section className={styles.maker}>
      <Header onLogout={logout} />
      <Footer />
    </section>
  );
};

export default Main;
