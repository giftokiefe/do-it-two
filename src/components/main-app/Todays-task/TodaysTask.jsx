import React, { useState, useEffect } from "react";
import "./TodaysTask.css";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

const TodaysTask = ({ selectedDate, onDateChange }) => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    const todoWithId = { ...newTodo, id: uuidv4(), completed: false };
    setTodos((prevTodos) => [...prevTodos, todoWithId]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <TodoForm
        addTodo={addTodo}
        selectedDate={selectedDate}
        onDateChange={onDateChange}
      />
      <div>
        {todos
          .filter(
            (todo) =>
              new Date(todo.date).toDateString() === selectedDate.toDateString()
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              task={todo.task}
              time={todo.time}
              date={todo.date}
              completed={todo.completed}
              onDelete={deleteTodo}
            />
          ))}
      </div>
    </div>
  );
};

export default TodaysTask;
