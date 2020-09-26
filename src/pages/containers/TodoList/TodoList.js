import React, { useContext, useCallback, useEffect } from "react";
import TodoContext from "../../../state/todos/Context";
import styles from "./TodoList.module.css";
import TodoItem from "./components/TodoItem/TodoItem";
import * as todosActions from "../../../state/todos/actions";

function TodoList() {
  const { todos, todosDispatch } = useContext(TodoContext);
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  const handleDelete = useCallback(
    (id) => {
      todosDispatch(todosActions.removeTodo(id));
    },
    [todosDispatch]
  );
  const handleStatusUpdate = useCallback((id, completed) => {
    todosDispatch(todosActions.toggleTodoStatus(id, completed));
  }, []);
  return (
    <div className={styles.container}>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              id={todo.id}
              key={todo.id}
              title={todo.title}
              completed={todo.completed}
              onStatusUpdate={handleStatusUpdate}
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
