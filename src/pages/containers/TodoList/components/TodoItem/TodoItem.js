import React, { useState, useCallback, useEffect } from "react";

function TodoItem({ id, title, completed, onStatusUpdate, onDelete }) {
  const [isChecked, setIsChecked] = useState(completed);
  const handleChange = useCallback((evt) => {
    setIsChecked(evt.target.checked);
  }, []);
  useEffect(() => {
    onStatusUpdate(id, isChecked);
  }, [id, isChecked, onStatusUpdate]);
  return (
    <li>
      <span>{title}</span>
      <button onClick={onDelete}>Deletar</button>
      <input type="checkbox" value={isChecked} onChange={handleChange} />
    </li>
  );
}

export default TodoItem;
