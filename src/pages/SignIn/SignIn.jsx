// import { useState } from "react";
import Button from "../../shared/Button/Button.jsx";
import Input from "../../shared/Input/Input.jsx";
import styles from "./SignIn.module.css";

const SignIn = () => {
  // console.log();

  return (
    <>
      <div className={styles["wrapper-signin"]}>
        <div className={styles.wrapperImgText}>
          <a>
            <img className={styles.logo} src="src/images/logoBlack.png" alt="logo">
            </img>
          </a>
          <h2 className={styles.heading}>Sign in</h2>
          <p className={styles.text}>Sign in to continue to Chatvia.</p>
        </div>

        <div className={styles["wrapper-form"]}>
          <div className={styles["wrapper-input"]}>
            <Input
              placeholder={"admin@themesbrand.com"}
              label={"Username"}
            />
          </div>
          <div className={styles["wrapper-input"]}>
            <Input
              placeholder={"......"}
              label={"Password"}
            />
          </div>
          <Button className={styles.btn}>
            Sign in
          </Button>
        </div>

      </div>
    </>
  )
}

export default SignIn;