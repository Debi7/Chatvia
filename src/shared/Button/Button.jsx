import PropTypes from "prop-types";
import styles from "./Button.module.css";


const Button = ({ children, onClick, className, ...rest }) => (
  <button onClick={onClick} className={className} {...rest}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
