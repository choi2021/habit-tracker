import React, { Component } from "react";
import AddForm from "../addForm/addForm";
import Habit from "../habit/habit";
import styles from "./habits.module.css";

class Habits extends Component {
  render() {
    return (
      <section>
        <AddForm onAdd={this.props.onAdd}></AddForm>
        <ul className={styles.habits}>
          {this.props.habits.map((habit) => (
            <Habit
              habit={habit}
              key={habit.id}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            ></Habit>
          ))}
        </ul>
      </section>
    );
  }
}

export default Habits;
