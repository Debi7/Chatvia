import PropTypes from "prop-types";
import styles from "./Checkbox.module.css";

import { clsx } from "clsx";

const Checkbox = (props) => {
  const { checkboxText, ...rest } = props;
  return (
    <>
      <label>
        <input {...rest} type="checkbox" className={clsx(styles["checkbox"])} />
      </label>
      <span className={clsx(styles["checkbox__text"])}>{checkboxText}</span>
    </>
  );
};

Checkbox.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  label: PropTypes.string,
  checkboxText: PropTypes.string,
};

export default Checkbox;
