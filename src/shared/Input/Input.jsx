import PropTypes from "prop-types";
import { forwardRef } from 'react';
import { clsx } from 'clsx';
import styles from "./Input.module.css";

const Input = forwardRef(function Input(props, ref) {
  const { label, className, ...rest } = props;

  return (
    <label>
      {label && <span className={styles["input-label"]}>{label}</span>}
      <div className={styles["input-group"]}>
        <div className={styles["img-box"]}>
          <img width="10px" height="10px" alt="img"></img>
        </div>
        <input {...rest} className={clsx(styles.input, className)} />
      </div>
    </label>
  );
});


Input.propTypes = {
  label: PropTypes.node,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;