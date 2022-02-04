import AddForm from "../addForm/addForm";
import Habit from "../habit/habit";
import styles from "./habits.module.css";
import React from "react";

const Habits = ({ onAdd, onIncrement, onDecrement, onDelete, habits }) => {
  return (
    <section>
      <AddForm onAdd={onAdd}></AddForm>
      <ul className={styles.habits}>
        {habits.map((habit) => (
          <Habit
            habit={habit}
            key={habit.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          ></Habit>
        ))}
      </ul>
    </section>
  );
};

export default Habits;
