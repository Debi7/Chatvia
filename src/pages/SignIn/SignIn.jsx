import { Formik } from 'formik';

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
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              // мой вариант
              errors.email =
                <div className={styles.errorText}>
                  <span>Username and password are invalid. Please enter correct username and password</span>
                </div>

              // errors.email = 'Required'; вариант из либы
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              // errors.email = 'Invalid email address'; вариант из либы
            }
            return errors;
          }}
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
              <div className={styles["wrapper-input"]}>

                {/* TODO тут должен быть розовый блок с инфой о невалидности значений из инпутов - НАД инпутами */}

                <div className={styles.textInput}>
                  <span>Username</span>
                </div>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder={"admin@themesbrand.com"}
                  icons={<LiaUser opacity={"0.6"} />}
                />
                {errors.email && touched.email && errors.email}
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
                  placeholder={"....."}
                  className={styles.placeholderSignIn}
                  icons={<CiLock opacity={"0.9"} />}
                />
                {errors.password && touched.password && errors.password}
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
                  onClick={values => {
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