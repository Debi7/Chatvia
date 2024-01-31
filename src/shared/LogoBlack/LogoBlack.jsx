import PropTypes from "prop-types";
<<<<<<< HEAD
import styles from "../../pages/SignIn/SignIn.module.css";
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
=======
import styles from "./LogoBlack.module.css";

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
>>>>>>> change

export default LogoBlack;

LogoBlack.propTypes = {
  className: PropTypes.string,
};
