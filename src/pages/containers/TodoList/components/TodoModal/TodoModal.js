import React, { useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { ReactComponent as CloseIcon } from "../../../../../assets/icons/delete-icon.svg";
import styles from "./TodoModal.module.css";

function TodoModal({ id, onModalClose, onTitleUpdate, getTitle }) {
  const { getFieldProps, errors, handleSubmit } = useFormik({
    initialValues: {
      title: getTitle(id),
    },
    validationSchema: yup.object({
      title: yup.string().required("Task title is mandatory"),
    }),
    validateOnChange: false,
    validateOnBlur: false,
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
          {errors.title ? (
            <small className={styles.error}>{errors.title}</small>
          ) : null}
          <button type="submit" className={styles.submit}>
            Update task
          </button>
        </form>
      </div>
    </>
  );
}

export default TodoModal;
