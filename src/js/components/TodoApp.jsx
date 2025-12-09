import React, { useState } from "react";

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (text) => {
    if (event.key == "Enter") {
      const text = inputValue.trim();
      if (text.length === 0) return;

      const newTodo = {
        id: crypto.randomUUID(),
        text,
      };

      setTodos((prev) => [...prev, newTodo]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const itemsLeft = todos.length;

  return (
    <div className="todo-app">
      <input
        className="todo-input"
        type="text"
        placeholder="What needs to be donde?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleAddTodo}
      />

      <ul className="todo-list">
        {todos.length === 0 ? (
          <li className="todo-empty">There aren't task, add tasks</li>
        ) : (
          todos.map((todo) => (
            <li className="todo-item" key={todo.id}>
              <span>{todo.text}</span>
              <button
                className="todo-delete"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                x
              </button>
            </li>
          ))
        )}
      </ul>

      <div className="todo-footer">
        {itemsLeft} {itemsLeft === 1 ? "item" : "items"} left
      </div>
    </div>
  );
};
