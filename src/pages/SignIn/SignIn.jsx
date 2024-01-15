import { Formik } from 'formik';
import * as Yup from 'yup';

import Button from "../../shared/Button/Button.jsx";
import Input from "../../shared/Input/Input.jsx";
import Checkbox from "../../shared/Checkbox/Checkbox.jsx";
import Footer from "../../shared/Footer/Footer.jsx";
import LogoBlack from "../../shared/LogoBlack/LogoBlack.jsx";
import Typography from "../../shared/Typography/Typography.jsx";

import { LiaUser } from "react-icons/lia";
import { CiLock } from "react-icons/ci";
import { CiCircleAlert } from "react-icons/ci";

import styles from "./SignIn.module.css";


const SignIn = () => {

  return (
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
        <Formik
          initialValues={{ email: "admin@themesbrand.com", password: '.....' }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            lastName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              {/* розовый блок с инфой о невалидности значений из инпутов */}
              {errors.email && touched.email ? (
                <div className={styles.errorText}>
                  <span>Username and password are invalid. Please enter correct username and password</span>
                </div>
              ) : null}

              <div className={styles["wrapper-input"]}>
                <div className={styles.textInput}>
                  <span>Username</span>
                </div>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder={"Enter email"}
                  icons={<LiaUser opacity={"0.6"} />}
                />
                {errors.email && touched.email ? (
                  <CiCircleAlert className={styles.iconCircl} />
                ) : null}
                {errors.email && touched.email ? (
                  <span className={styles.errorTextUnderInput}>Please Enter Your Username</span>
                ) : null}
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
                  ref={console.log}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder={"Enter Password"}
                  icons={<CiLock opacity={"0.9"} />}
                />
                {errors.email && touched.email ? (
                  <CiCircleAlert className={styles.iconCircl} />
                ) : null}
                {errors.email && touched.email ? (
                  <span className={styles.errorTextUnderInput}>Please Enter Your Password</span>
                ) : null}
              </div>

              <div>
                <Checkbox
                  className={styles.checkbox__text}
                  checkboxText={"Remember me"}
                />
              </div>
              <div>
                <Button
                  type={"submit"}
                  disabled={isSubmitting}
                  onClick={() => {
                    console.log("submit", values)
                  }}
                  className={styles.btn}>
                  Sign in
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>

      <div>
        <Footer
          href="/register"
          className={styles["link-footer"]}
          value={"Don't have an account ? "}
          valueRef={"Signup now"}
        />
      </div>
    </div>
  )
}

export default SignIn;