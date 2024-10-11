import React, { useState, useEffect } from "react";
import TodaysTask from "../Todays-task/TodaysTask";
import Settings from "../Settings Section/Settings";
import ScheduledTasks from "../Scheduled-tasks/ScheduledTasks";

export default function BiggerSide({ activeView }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bigger-side">
      {activeView === "today" ? (
        <TodaysTask
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
          todos={todos}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
        />
      ) : activeView === "settings" ? (
        <Settings />
      ) : activeView === "scheduled" ? (
        <ScheduledTasks selectedDate={selectedDate} todos={todos} />
      ) : null}
    </div>
  );
}
