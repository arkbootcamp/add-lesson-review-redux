import React from "react";
import styles from "./input.module.css";

const Input = ({ label, id, type, value, onChange, ...props }) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={id}>
        {label}
      </label>
        <input {...props} id={id} type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
