import React, { Component } from "react";
import Habit from "../habit/habit";
import styles from "./habits.module.css";

class Habits extends Component {
  state = {
    habits: [
      {
        name: "Reading",
        count: 0,
        id: 1,
      },
      {
        name: "Braziliian",
        count: 0,
        id: 2,
      },
      {
        name: "Waxing",
        count: 0,
        id: 3,
      },
    ],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits].map((item) => {
      if (item.id === habit.id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    this.setState({ habits: habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits].map((item) => {
      if (item.id === habit.id) {
        const count = item.count - 1;
        return { ...item, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits: habits });
  };

  handleDelete = (habit) => {
    const habits = [...this.state.habits].filter(
      (item) => habit.id !== item.id
    );
    console.log(habits);
    this.setState({ habits: habits });
  };

  render() {
    return (
      <ul className={styles.habits}>
        {this.state.habits.map((habit) => (
          <Habit
            habit={habit}
            key={habit.id}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          ></Habit>
        ))}
      </ul>
    );
  }
}

export default Habits;
