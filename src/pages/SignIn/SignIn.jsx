// import { useState } from "react";
import Button from "../../shared/Button/Button.jsx";
import Input from "../../shared/Input/Input.jsx";
import Checkbox from "../../shared/Checkbox/Checkbox.jsx";

import styles from "./SignIn.module.css";


const SignIn = () => {

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
              // onChange={}
              // onClick={}
              // onBlur={}
              // value={value}
              // ref={ref}
              type={"email"}
              placeholder={"admin@themesbrand.com"}
              label={"Username"}
            />
          </div>
          <div className={styles["wrapper-input"]}>
            <Input
              // onChange={}
              // onClick={}
              // onBlur={}
              // value={value}
              // ref={ref}
              type={"password"}
              placeholder={"....."}
              className={styles.placeholderSignIn}
              label={"Password"}
            />
          </div>
          <div>
            <Checkbox
              className={styles.checkbox__text}
              checkboxText={"Remember me"}
            />
          </div>
          <Button
            type={"submit"}
            // onClick={() => { }}
            className={styles.btn}>
            Sign in
          </Button>
        </div>

      </div>
    </>
  )
}

export default SignIn;