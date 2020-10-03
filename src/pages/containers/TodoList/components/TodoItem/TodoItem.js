import React, { useState, useCallback, useEffect } from "react";
import { ReactComponent as UpdateTitleIcon } from "../../../../../assets/icons/update-icon.svg";
import { ReactComponent as DeleteTitleIcon } from "../../../../../assets/icons/delete-icon.svg";
import styles from "./TodoItem.module.css";

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
  const handleModalOpen = useCallback(() => {
    onModalOpen(id);
  }, [id, onModalOpen]);
  const handleDelete = useCallback(() => {
    onDelete(id);
  }, [id, onDelete]);
  return (
    <li className={styles.item}>
      <span className={completed ? styles.completed : null}>{title}</span>
      <div className={styles.controlButtons}>
        <button onClick={handleModalOpen}>
          <UpdateTitleIcon />
        </button>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        <button onClick={handleDelete}>
          <DeleteTitleIcon />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
