import "./app.css";
import Habits from "./components/habits/habits";
import Header from "./components/header/header";

import React, { useState } from "react";

const App = (props) => {
  const [habits, setHabits] = useState([
    {
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
    },
  ]);

  const handleIncrement = (habit) => {
    setHabits((habits) => {
      const updated = [...habits].map((item) => {
        if (item.id === habit.id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      return updated;
    });
  };

  const handleDecrement = (habit) => {
    setHabits((habits) => {
      const updated = [...habits].map((item) => {
        if (item.id === habit.id) {
          const count = item.count - 1;
          return { ...item, count: count < 0 ? 0 : count };
        }
        return item;
      });
      return updated;
    });
  };

  const handleDelete = (habit) => {
    setHabits((habits) => {
      const updated = [...habits].filter((item) => habit.id !== item.id);
      return updated;
    });
  };

  const handleAdd = (value) => {
    setHabits((habits) => {
      const updated = [
        ...habits,
        {
          name: value,
          count: 0,
          id: Date.now(),
        },
      ];
      return updated;
    });
  };
  return (
    <>
      <Header
        totalCount={habits.filter((habit) => habit.count > 0).length}
      ></Header>
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
      ></Habits>
    </>
  );
};

export default App;
