import React from "react";
import styles from "./TodoSelect.module.css";

function TodoSelect({ intialState, onOptionChange, options }) {
  return (
    <select
      className={styles.select}
      value={intialState}
      onChange={onOptionChange}
    >
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        );
      })}
    </select>
  );
}

export default TodoSelect;
