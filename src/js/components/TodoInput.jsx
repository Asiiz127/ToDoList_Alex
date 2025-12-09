import React, { useState } from "react";

const TodoInput = ({ onAddTodo }) => {
  const [value, setValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onAddTodo(value);
      setValue("");
    }
  };

  return (
    <input
      className="todo-input"
      type="text"
      placeholder="What needs to be done?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default TodoInput;
