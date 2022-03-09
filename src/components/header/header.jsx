import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <nav className={styles.header}>
      <img className={styles.logo} src="/images/logo.png" alt="logo" />
      <h1 className={styles.title}>Business Card Maker</h1>
    </nav>
  );
};
export default Header;
