import PropTypes from "prop-types";
import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./Input.module.css";

const Input = forwardRef(function Input(props, ref) {
  const { label, className, icons, ...rest } = props;

  return (
    <label>
      {label && <span className={styles["input-label"]}>{label}</span>}
      <div className={styles["input-group"]}>
        <div className={styles["svg-box"]}>{icons}</div>
        <input {...rest} className={clsx(styles.input, className)} ref={ref} />
      </div>
    </label>
  );
});

Input.propTypes = {
  label: PropTypes.node,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  icons: PropTypes.node,
};

export default Input;
