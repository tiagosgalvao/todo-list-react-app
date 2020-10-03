import React, { useContext, useState, useCallback } from "react";
import TodoContext from "../../../state/todos/Context";
import * as todosActions from "../../../state/todos/actions";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoModal from "./components/TodoModal/TodoModal";
import FilterContext from "../../../state/filter/Context";
import styles from "./TodoList.module.css";

function filteredList(list, curFilter) {
  switch (curFilter) {
    case "all":
      return list;
    case "active":
      return list.filter((item) => {
        return item.completed === false;
      });
    case "completed":
      return list.filter((item) => {
        return item.completed === true;
      });
    default:
      throw new Error();
  }
}

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
  const handleModalOpen = useCallback((id) => {
    setCurId(id);
  }, []);
  const handleModalClose = useCallback(() => {
    setCurId(null);
  }, []);
  const getTitle = useCallback(
    (id) => {
      const todo = todos.find((todo) => {
        return todo.id === id;
      });
      return todo.title;
    },
    [todos]
  );
  const { filter } = useContext(FilterContext);
  return (
    <div className={styles.container}>
      <ul>
        {filteredList(todos, filter).map((todo) => {
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
          getTitle={getTitle}
          onModalClose={handleModalClose}
          onTitleUpdate={handleTitleUpdate}
        />
      )}
    </div>
  );
}

export default TodoList;
