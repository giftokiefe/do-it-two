import React, { useState } from "react";
import "./TodaysTask.css";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const TodaysTask = ({ selectedDate, onDateChange }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task, time) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task, time, completed: false, date: selectedDate },
    ]);
    console.log(todos);
  };

  return (
    <div>
      <TodoForm
        addTodo={addTodo}
        selectedDate={selectedDate}
        onDateChange={onDateChange}
      />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          task={todo.task}
          time={todo.time}
          date={todo.date}
        />
      ))}
    </div>
  );
};

export default TodaysTask;
