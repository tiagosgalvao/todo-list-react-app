import React, { useContext } from "react";
import TodoContext from "../../../state/todos/Context";
import styles from "./TodoList.module.css";

function TodoList() {
  const { todos } = useContext(TodoContext);
  return (
    <div className={styles.container}>
      <ul>
        {todos.map((todo) => {
          return <li>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
