import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import styles from "./login.module.css";

const Login = ({ auth }) => {
  const BtnClick = (e) => {
    const platform = e.target.innerText;
    auth.login(platform.toLowerCase());
  };

  return (
    <section className={styles.login}>
      <div className={styles.header}>
        <Header></Header>
      </div>
      <main className={styles.content}>
        <h1 className={styles.title}>Login</h1>
        <button className={styles.btn} onClick={BtnClick}>
          Google
        </button>
        <button className={styles.btn} onClick={BtnClick}>
          Github
        </button>
      </main>
      <div className={styles.footer}>
        <Footer></Footer>
      </div>
    </section>
  );
};

export default Login;
