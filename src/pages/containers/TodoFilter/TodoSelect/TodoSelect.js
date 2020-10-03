import React from "react";

function TodoSelect({ intialState, onOptionChange, options }) {
  return (
    <select value={intialState} onChange={onOptionChange}>
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
