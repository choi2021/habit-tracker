import React, { PureComponent } from "react";
import styles from "./header.module.css";

class Header extends PureComponent {
  render() {
    console.log("header");
    return (
      <header className={styles.header}>
        <i className={`fas fa-leaf ${styles.logo}`}></i>
        <h1 className={styles.title}>Habit tracker</h1>
        <span className={styles.totalCount}>{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Header;
