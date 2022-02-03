import React, { PureComponent } from "react";
import { createRef } from "react/cjs/react.production.min";
import styles from "./addForm.module.css";

class AddForm extends PureComponent {
  formRef = createRef();
  inputRef = createRef();
  onSubmit = (e) => {
    e.preventDefault();
    const value = this.inputRef.current.value;
    value && this.props.onAdd(value);
    this.formRef.current.reset();
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.onSubmit} ref={this.formRef}>
        <input className={styles.input} type="text" ref={this.inputRef} />
        <button className={styles.addBtn}>Add</button>
      </form>
    );
  }
}

export default AddForm;
