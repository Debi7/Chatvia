import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ children, onClick, ...rest }) => (
  <button className={styles.btn} onClick={onClick} {...rest}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
