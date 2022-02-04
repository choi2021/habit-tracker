import styles from "./header.module.css";
import React, { memo } from "react";

const Header = memo(({ totalCount }) => {
  console.log("header");
  return (
    <header className={styles.header}>
      <i className={`fas fa-leaf ${styles.logo}`}></i>
      <h1 className={styles.title}>Habit tracker</h1>
      <span className={styles.totalCount}>{totalCount}</span>
    </header>
  );
});

export default Header;
