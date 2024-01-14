import Button from "../../shared/Button/Button.jsx";
import Input from "../../shared/Input/Input.jsx";
import Footer from "../../shared/Footer/Footer.jsx";
import LogoBlack from "../../shared/LogoBlack/LogoBlack.jsx";
import Typography from "../../shared/Typography/Typography.jsx";
import { MdOutlineMailOutline } from "react-icons/md";
import { LiaUser } from "react-icons/lia";
import { CiLock } from "react-icons/ci";

import styles from "./Register.module.css";

const Register = () => {

  return (
    <>
      <div className={styles["wrapper-register"]}>
        <div className={styles.wrapperImgText}>
          <LogoBlack />

          <Typography
            tag="h2"
            className={styles.heading}>
            {"Register"}
          </Typography>

          <Typography
            tag="p"
            className={styles.text}>
            {"Get your Chatvia account now."}
          </Typography>
        </div>

        <div className={styles["wrapper-form"]}>
          <div className={styles["wrapper-input"]}>
            <div className={styles.textInput}>
              <span>Email</span>
            </div>
            <Input
              type={"email"}
              placeholder={"Enter Email"}
              icons={<MdOutlineMailOutline opacity={"0.6"} />}
            />
          </div>
          <div className={styles["wrapper-input"]}>
            <div className={styles.textInput}>
              <span>Username</span>
            </div>
            <Input
              ref={console.log}
              type={"email"}
              placeholder={"Enter Username"}
              icons={<LiaUser opacity={"0.6"} />}
            />
          </div>
          <div className={styles["wrapper-input"]}>
            <div className={styles.textInput}>
              <span>Password</span>
            </div>
            <Input
              type={"password"}
              placeholder={"Enter Password"}
              icons={<CiLock opacity={"0.9"} />}
            />
          </div>
          <div>
            <Button
              type={"submit"}
              // onClick={() => { }}
              className={styles.btn}>
              Register
            </Button>
            <div className={styles["text-agree"]}>
              <span className={styles.p}>By registering you agree to the Chatvia</span>
              <a href="/register" className={styles.textRef}>Terms of Use</a>
            </div>
          </div>
        </div>
        <div>
          <Footer
            href="/signin"
            className={styles["link-footer"]}
            value={"Already have an account ? "}
            valueRef={"Signin"}
          />
        </div>
      </div>
    </>
  )
}

export default Register;