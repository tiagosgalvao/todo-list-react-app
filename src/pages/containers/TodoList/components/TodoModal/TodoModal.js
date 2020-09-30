import React, { useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { ReactComponent as CloseIcon } from "../../../../../assets/icons/delete-icon.svg";
import styles from "./TodoModal.module.css";

function TodoModal({ id, title, onModalClose, onTitleUpdate }) {
  const { getFieldProps, touched, errors, isValid, handleSubmit } = useFormik({
    initialValues: {
      title: title,
    },
    validationSchema: yup.object({
      title: yup.string().required("Task title is mandatory"),
    }),
    onSubmit: (values, formikBag) => {
      onTitleUpdate(id, values.title);
      formikBag.setFieldValue("title", "", false);
      onModalClose();
    },
  });
  const inputTitle = useRef(null);
  useEffect(() => {
    inputTitle.current.focus();
  }, []);
  return (
    <>
      <div className={styles.backdrop} onClick={onModalClose} />
      <div className={styles.modal}>
        <form onSubmit={handleSubmit}>
          <button className={styles.closeButton} onClick={onModalClose}>
            <CloseIcon />
          </button>
          <input
            className={styles.input}
            type="text"
            placeholder="New task title"
            autoComplete="off"
            ref={inputTitle}
            {...getFieldProps("title")}
          ></input>
          {touched.title && errors.title ? (
            <small className={styles.error}>{errors.title}</small>
          ) : null}
          <button type="submit" className={styles.submit} disabled={!isValid}>
            Update task
          </button>
        </form>
      </div>
    </>
  );
}

export default TodoModal;
