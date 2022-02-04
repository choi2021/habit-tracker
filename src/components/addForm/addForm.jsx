import styles from "./addForm.module.css";
import React, { memo, useRef } from "react";

const AddForm = memo(({ onAdd }) => {
  console.log("addform");
  const formRef = useRef();
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    value && onAdd(value);
    formRef.current.reset();
  };

  return (
    <form className={styles.form} onSubmit={onSubmit} ref={formRef}>
      <input className={styles.input} type="text" ref={inputRef} />
      <button className={styles.addBtn}>Add</button>
    </form>
  );
});

export default AddForm;
