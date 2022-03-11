import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import styles from "./login.module.css";

const Login = ({ auth, login, logout }) => {
  const BtnClick = (e) => {
    const platform = e.target.textContent;
    auth.login(platform.toLowerCase()); //
  };

  return (
    <section className={styles.login}>
      <Header onLogout={logout} />
      <section className={styles.content}>
        <h1 className={styles.title}>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.btn} onClick={BtnClick}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.btn} onClick={BtnClick}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
