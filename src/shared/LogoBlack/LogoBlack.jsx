import PropTypes from "prop-types";
import styles from "./logoBlack.module.css";
import logoSrc from "../../assets/icons/logoBlack.png";


const LogoBlack = () => (
  <a>
    <img
      className={styles.logo}
      src={logoSrc}
      alt="logo"
    />
  </a>
)

export default LogoBlack;

LogoBlack.propTypes = {
  className: PropTypes.string,
};
