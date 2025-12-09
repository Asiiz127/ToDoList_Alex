import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDeleteTodo }) => {
  if (todos.length === 0) {
    return (
      <ul className="todo-list">
        <li className="todo-empty">No hay tareas, añadir tareas</li>
      </ul>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDeleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
