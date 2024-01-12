import Button from "../../shared/Button/Button.jsx";
import Input from "../../shared/Input/Input.jsx";
import Checkbox from "../../shared/Checkbox/Checkbox.jsx";
import Footer from "../../shared/Footer/Footer.jsx";
import LogoBlack from "../../shared/LogoBlack/LogoBlack.jsx";
import Typography from "../../shared/Typography/Typography.jsx";

import { LiaUser } from "react-icons/lia";
import { CiLock } from "react-icons/ci";

import styles from "./SignIn.module.css";


const SignIn = () => {

  return (
    <>
      <div className={styles["wrapper-signin"]}>
        <div className={styles.wrapperImgText}>
          <LogoBlack />

          <Typography
            tag="h2"
            className={styles.heading}>
            {"Sign in"}
          </Typography>

          <Typography
            tag="p"
            className={styles.text}>
            {"Sign in to continue to Chatvia."}
          </Typography>
        </div>

        <div className={styles["wrapper-form"]}>
          <div className={styles["wrapper-input"]}>
            <div className={styles.textInput}>
              <span>Username</span>
            </div>
            <Input
              ref={console.log}
              type={"email"}
              placeholder={"admin@themesbrand.com"}
              icons={<LiaUser opacity={"0.6"} />}
            />
          </div>
          <div className={styles["wrapper-input"]}>
            <div className={styles.textInput}>
              <span>Password</span>
              <a
                href={"/reset"}
                className={styles.textRef}>
                Forgot password?
              </a>
            </div>
            <Input
              type={"password"}
              placeholder={"....."}
              className={styles.placeholderSignIn}
              icons={<CiLock opacity={"0.9"} />}
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
        <div>
          <Footer
            className={styles["link-footer"]}
            value={"Don't have an account ? "}
            valueRef={"Signup now"}
          />
        </div>
      </div>
    </>
  )
}

export default SignIn;