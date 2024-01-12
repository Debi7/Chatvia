import PropTypes from "prop-types";
import styles from "../../pages/Signin/SignIn.module.css";

import { clsx } from 'clsx';

const Checkbox = (props) => {
  const { checkboxText, ...rest } = props;
  return (
    <div>
      <label className={clsx(styles["wrapper_checkbox"])}>
        <input {...rest} type="checkbox" />
        <span className={clsx(styles["checkbox__p"])}>{checkboxText}</span>
      </label>
    </div>
  )
};

Checkbox.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  label: PropTypes.string,
  checkboxText: PropTypes.string,
};

export default Checkbox;
