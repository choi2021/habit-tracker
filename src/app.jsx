import "./app.css";
import Habits from "./components/habits/habits";
import Header from "./components/header/header";
import React, { Component } from "react";

class App extends Component {
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

  handleAdd = (value) => {
    const habits = [
      ...this.state.habits,
      {
        name: value,
        count: 0,
        id: Date.now(),
      },
    ];
    this.setState({ habits: habits });
  };

  render() {
    return (
      <>
        <Header
          totalCount={
            this.state.habits.filter((habit) => habit.count > 0).length
          }
        ></Header>
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
        ></Habits>
      </>
    );
  }
}

export default App;
