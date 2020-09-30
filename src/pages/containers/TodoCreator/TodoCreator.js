import React, { useContext, useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import TodosContext from "../../../state/todos/Context";
import * as todosActions from "../../../state/todos/actions";
import styles from "./TodoCreator.module.css";

function TodoCreator() {
  const { todosDispatch } = useContext(TodosContext);
  const { getFieldProps, touched, errors, isValid, handleSubmit } = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: yup.object({
      title: yup.string().required("Task title is mandatory"),
    }),
    onSubmit: (values, formikBag) => {
      todosDispatch(todosActions.addTodo(values.title));
      formikBag.setFieldValue("title", "", false);
    },
  });
  const inputTitle = useRef(null);
  useEffect(() => {
    inputTitle.current.focus();
  }, []);
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="New task"
        autoComplete="off"
        ref={inputTitle}
        {...getFieldProps("title")}
      ></input>
      {touched.title && errors.title ? (
        <small className={styles.error}>{errors.title}</small>
      ) : null}
      <button type="submit" className={styles.submit} disabled={!isValid}>
        Add task
      </button>
    </form>
  );
}

export default TodoCreator;
