import React, { useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function TodoModal({ id, onModalClose, onTitleUpdate }) {
  const { getFieldProps, touched, errors, isValid, handleSubmit } = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: yup.object({
      title: yup.string().required("Task title is mandatory"),
    }),
    onSubmit: (values, formikBag) => {
      onTitleUpdate(id, values.title);
      formikBag.setFieldValue("title", "", false);
    },
  });
  const inputTitle = useRef(null);
  useEffect(() => {
    inputTitle.current.focus();
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New task name"
          autoComplete="off"
          ref={inputTitle}
          {...getFieldProps("title")}
        ></input>
        {touched.title && errors.title ? <small>{errors.title}</small> : null}
        <button type="submit" disabled={!isValid}>
          Update task
        </button>
      </form>
      <button onClick={onModalClose}>Fechar</button>
    </div>
  );
}

export default TodoModal;
