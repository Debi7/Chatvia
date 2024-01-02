import PropTypes from "prop-types";
// import styles from "./Button.module.css";

const Button = ({ children, ...rest }) => (
  <button {...rest}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
