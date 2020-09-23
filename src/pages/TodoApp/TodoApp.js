import React from "react";
import TodoCreator from "../containers/TodoCreator/TodoCreator";

function TodoApp() {
  return (
    <>
      <header>
        <TodoCreator></TodoCreator>
      </header>
      <main>TodoList</main>
      <footer>TodoFilter</footer>
    </>
  );
}

export default TodoApp;
