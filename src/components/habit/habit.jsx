import styles from "./habit.module.css";
import React, { memo } from "react";

const Habit = memo(({ onIncrement, onDecrement, onDelete, habit }) => {
  const handleIncrement = () => {
    onIncrement(habit);
  };

  const handleDecrement = () => {
    onDecrement(habit);
  };

  const handleDelete = () => {
    onDelete(habit);
  };

  const { name, count } = habit;
  console.log(`${name}`);
  return (
    <li className={styles.habit}>
      <span className={styles.name}>{name}</span>
      <span className={styles.count}>{count}</span>
      <button className={styles.btn} onClick={handleIncrement}>
        <i className="fas fa-plus"></i>
      </button>
      <button className={styles.btn} onClick={handleDecrement}>
        <i className="fas fa-minus"></i>
      </button>
      <button
        className={`${styles.btn} ${styles.deleteBtn}`}
        onClick={handleDelete}
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
});

export default Habit;
