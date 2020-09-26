import React from "react";

function TodoItem({ title, onDelete }) {
  return (
    <li>
      <span>{title}</span>
      <button onClick={onDelete}>Deletar</button>
    </li>
  );
}

export default TodoItem;
