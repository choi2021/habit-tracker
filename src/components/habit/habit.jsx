import React, { Component } from "react";
import styles from "./habit.module.css";

class Habit extends Component {
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className={styles.habit}>
        <span className={styles.name}>{name}</span>
        <span className={styles.count}>{count}</span>
        <button className={styles.btn} onClick={this.handleIncrement}>
          <i className="fas fa-plus"></i>
        </button>
        <button className={styles.btn} onClick={this.handleDecrement}>
          <i className="fas fa-minus"></i>
        </button>
        <button
          className={`${styles.btn} ${styles.deleteBtn}`}
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
