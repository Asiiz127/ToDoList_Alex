import React from "react";

const TodoFooter = ({ count }) => {
  return (
    <div className="todo-footer">
      {count} {count === 1 ? "item" : "items"} left
    </div>
  );
};

export default TodoFooter;
