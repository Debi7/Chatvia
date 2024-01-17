import PropTypes from "prop-types";
import styles from "../../pages/SignIn/SignIn.module.css";

const LogoBlack = () => (
  <>
    <a>
      <img
        className={styles.logo}
        src="../src/assets/icons/logoBlack.png"
        alt="logo"
      />
    </a>
  </>
);

export default LogoBlack;

LogoBlack.propTypes = {
  className: PropTypes.string,
};
