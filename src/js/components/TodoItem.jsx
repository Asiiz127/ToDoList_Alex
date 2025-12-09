import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="todo-item">
      <span>{todo.text}</span>
      <button className="todo-delete" onClick={() => onDelete(todo.id)}>
        ✕
      </button>
    </li>
  );
};

export default TodoItem;
