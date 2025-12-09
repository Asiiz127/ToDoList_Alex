import React, { useState } from "react";
import TodoFooter from "../components/TodoFooter";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const newTodo = {
      id: crypto.randomUUID(),
      text: trimmed,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-wrapper">
      <div className="todo-card">
        <div className="todo-header">
          <h1 className="todo-tittle">ToDos</h1>
        </div>
        <TodoInput onAddTodo={handleAddTodo} />
        <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
        <div className="todo-footer">
          <TodoFooter count={todos.length} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
