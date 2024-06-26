import PropTypes from "prop-types";
import { IoMdHeart } from "react-icons/io";
import { clsx } from "clsx";
import styles from "./Footer.module.css";

const Footer = (props) => {
  const { value, valueRef, onClick, ...rest } = props;

  return (
    <div className={clsx(styles["wrapper-footer"])}>
      <p>
        {value}
        <a className={clsx(styles["link-footer"])} onClick={onClick} {...rest}>
          {valueRef}
        </a>
      </p>
      <span>
        © 2024 Chatvia. Crafted with{" "}
        <IoMdHeart className={styles["icon-footer"]} /> by Themesbrand
      </span>
    </div>
  );
};

Footer.propTypes = {
  value: PropTypes.string,
  valueRef: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Footer;
