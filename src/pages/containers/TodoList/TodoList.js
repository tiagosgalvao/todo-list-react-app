import React, { useContext, useCallback } from "react";
import TodoContext from "../../../state/todos/Context";
import styles from "./TodoList.module.css";
import TodoItem from "./components/TodoItem/TodoItem";
import * as todosActions from "../../../state/todos/actions";

function TodoList() {
  const { todos, todosDispatch } = useContext(TodoContext);
  const handleDelete = useCallback(
    (id) => {
      todosDispatch(todosActions.removeTodo(id));
    },
    [todosDispatch]
  );
  return (
    <div className={styles.container}>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              title={todo.title}
              onDelete={() => {
                handleDelete(todo.id);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
