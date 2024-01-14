import Button from "../../shared/Button/Button.jsx";
import Input from "../../shared/Input/Input.jsx";
import Typography from "../../shared/Typography/Typography.jsx";
import LogoBlack from "../../shared/LogoBlack/LogoBlack.jsx";
import Footer from "../../shared/Footer/Footer.jsx";
import { MdOutlineMailOutline } from "react-icons/md";

import styles from "./FormReset.module.css";


const FormReset = () => {

  return (
    <>
      <div className={styles["wrapper-formReset"]}>
        <div className={styles.formReset}>
          <LogoBlack />

          <Typography
            tag="h2"
            className={styles.heading}>
            {"Reset Password"}
          </Typography>

          <Typography
            tag="p"
            className={styles.text}>
            {"Reset Password With Chatvia."}
          </Typography>
        </div>

        <div className={styles["wrapper-form"]}>
          <div className={styles["wrapper-input"]}>
            <div className={styles["text-instructions"]}>
              <span>Enter your Email and instructions will be sent to you!</span>
            </div>
            <div className={styles.textInput}>
              <span>Email</span>
            </div>
            <Input
              type={"email"}
              placeholder={"Enter Email"}
              icons={<MdOutlineMailOutline opacity={"0.6"} />}
            />
            <div className={styles.textInput}>
              <span>Required</span>
            </div>

            <div>
              <Button
                type={"submit"}
                // onClick={() => { }}
                className={styles.btn}>
                Reset
              </Button>
            </div>
          </div>
        </div>
        <div>
          <Footer
            href="/signin"
            className={styles["link-footer"]}
            value={"Remember It ? "}
            valueRef={"Signin"} 
            />
        </div>
      </div>
    </>
  )
}

export default FormReset;














{/* <div className={styles["wrapper-input"]}>
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
                href="/reset"
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
 */}
