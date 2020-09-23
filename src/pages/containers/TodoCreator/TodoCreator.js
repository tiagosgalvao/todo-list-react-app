import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import TodosContext from "../../../state/todos/Context";
import * as todosActions from "../../../state/todos/actions";

function TodoCreator() {
  const { todos, todosDispatch } = useContext(TodosContext);
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values) => {
      todosDispatch(todosActions.addTodo(values.title));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        placeholder="New task"
        autoComplete="off"
        {...formik.getFieldProps("title")}
      ></input>
      <button type="submit">Add task</button>
    </form>
  );
}

export default TodoCreator;
