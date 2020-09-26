import React, { useState, useCallback, useEffect } from "react";

function TodoItem({
  id,
  title,
  completed,
  onModalOpen,
  onStatusUpdate,
  onDelete,
}) {
  const [isChecked, setIsChecked] = useState(completed);
  const handleChange = useCallback((evt) => {
    setIsChecked(evt.target.checked);
  }, []);
  useEffect(() => {
    onStatusUpdate(id, isChecked);
  }, [id, isChecked, onStatusUpdate]);
  const hableTitleUpdate = useCallback(() => {
    onModalOpen(id);
  }, [id, onModalOpen]);
  const handleDelete = useCallback(() => {
    onDelete(id);
  }, [id, onDelete]);
  return (
    <li>
      <span>{title}</span>
      <button onClick={hableTitleUpdate}>Atualizar</button>
      <input type="checkbox" value={isChecked} onChange={handleChange} />
      <button onClick={handleDelete}>Deletar</button>
    </li>
  );
}

export default TodoItem;
