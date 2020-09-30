import React, { useContext, useState, useCallback } from "react";
import TodoContext from "../../../state/todos/Context";
import styles from "./TodoList.module.css";
import TodoItem from "./components/TodoItem/TodoItem";
import * as todosActions from "../../../state/todos/actions";
import TodoModal from "./components/TodoModal/TodoModal";

function TodoList() {
  const { todos, todosDispatch } = useContext(TodoContext);
  const handleTitleUpdate = useCallback(
    (id, title) => {
      console.log(id, title);
      todosDispatch(todosActions.toggleTodoTitle(id, title));
    },
    [todosDispatch]
  );
  const handleStatusUpdate = useCallback(
    (id, completed) => {
      todosDispatch(todosActions.toggleTodoStatus(id, completed));
    },
    [todosDispatch]
  );
  const handleDelete = useCallback(
    (id) => {
      todosDispatch(todosActions.removeTodo(id));
    },
    [todosDispatch]
  );
  const [curId, setCurId] = useState(null);
  const [curTitle, setCurTitle] = useState("");
  const handleModalOpen = useCallback((id, title) => {
    setCurId(id);
    setCurTitle(title);
  }, []);
  const handleModalClose = useCallback(() => {
    setCurId(null);
    setCurTitle("");
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
              onModalOpen={handleModalOpen}
              onStatusUpdate={handleStatusUpdate}
              onDelete={handleDelete}
            />
          );
        })}
      </ul>
      {curId && (
        <TodoModal
          id={curId}
          title={curTitle}
          onModalClose={handleModalClose}
          onTitleUpdate={handleTitleUpdate}
        />
      )}
    </div>
  );
}

export default TodoList;
