import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({ label, onChange, value, className, placeholder, ...rest }) => (
  <label className={className} {...rest}>
    {label && <span className={styles["input-label"]}>{label}</span>}
    <div className={styles["input-group"]}>
      <div className={styles["img-box"]}>
        <img width="10px" height="10px" alt="img"></img>
      </div>
      <input className={styles.input} onChange={onChange} value={value} placeholder={placeholder} />
    </div>
  </label>
);

Input.propTypes = {
  label: PropTypes.node,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
