import PropTypes from "prop-types";
import { clsx } from "clsx";
import styles from "./Input.module.css";

import { CiCircleAlert } from "react-icons/ci";

const Input = (props) => {
  const { label, className, icons, name, errors, touched, ...rest } = props;

  return (
    <div className={clsx(styles["wrapper-input"])}>

      <label>
        {label && <span className={clsx(styles["input-label"])}>{label}</span>}
        <div className={clsx(styles["input-group"])}>
          <div className={clsx(styles["svg-box"])}>{icons}</div>
          <input {...rest} className={clsx(styles.input, className)} name={name} />
        </div>
      </label>

      {/* TODO errors и touched - это объекты? а name - ключ? */}
      {errors[name] && touched[name] ? <CiCircleAlert className={clsx(styles.iconCircl)} /> : null}
      {errors[name] && touched[name] ? (
        <span className={clsx(styles.errorTextUnderInput)}>
          {errors[name]}
        </span>
      ) : null}

    </div>
  );
};


Input.propTypes = {
  label: PropTypes.node,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  icons: PropTypes.node,
  name: PropTypes.string,
  errors: PropTypes.object,
  touched: PropTypes.bool,
  errorText: PropTypes.string
};

export default Input;
