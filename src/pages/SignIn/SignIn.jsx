import { Formik } from "formik";
import * as Yup from "yup";

import Button from "src/shared/Button/Button.jsx";
import Input from "src/shared/Input/Input.jsx";
import Checkbox from "src/shared/Checkbox/Checkbox.jsx";
import Footer from "src/shared/Footer/Footer.jsx";
import LogoBlack from "src/shared/LogoBlack/LogoBlack.jsx";
import Typography from "src/shared/Typography/Typography.jsx";

import { LiaUser } from "react-icons/lia";
import { CiLock } from "react-icons/ci";
import { CiCircleAlert } from "react-icons/ci";

import styles from "./SignIn.module.css";

const SignIn = () => {
  return (
    <div className={styles["wrapper-signin"]}>
      <div className={styles.wrapperImgText}>
        <LogoBlack />

        <Typography tag="h2" className={styles.heading}>
          {"Sign in"}
        </Typography>

        <Typography tag="p" className={styles.text}>
          {"Sign in to continue to Chatvia."}
        </Typography>
      </div>

      <div className={styles["wrapper-form"]}>
        <Formik
          initialValues={{ email: "admin@themesbrand.com", password: "....." }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Некорректный E-mail")
              .required("Обязательное поле"),
            password: Yup.string().required("Обязательное поле"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log("values", values);
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
              {!!errors.email &&
              touched.email &&
              !!errors.password &&
              touched.password ? (
                <div className={styles.errorText}>
                  <span>
                    Username and password are invalid. Please enter correct
                    username and password
                  </span>
                </div>
              ) : null}

              <div className={styles["wrapper-input"]}>
                <div className={styles.textInput}>
                  <span>Username</span>
                </div>
                <Input
                  // label="UserName"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder={"Enter email"}
                  icons={<LiaUser opacity={"0.6"} />}
                  errors={errors}
                  touched={touched}
                />
                {errors.email && touched.email ? (
                  <CiCircleAlert className={styles.iconCircl} />
                ) : null}
                {errors.email && touched.email ? (
                  <span className={styles.errorTextUnderInput}>
                    Please Enter Your Username
                  </span>
                ) : null}
              </div>

              <div className={styles["wrapper-input"]}>
                <div className={styles.textInput}>
                  <span>Password</span>
                  <a href="/reset" className={styles.textRef}>
                    Forgot password?
                  </a>
                </div>
                <Input
                  ref={console.log}
                  // label="Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder={"Enter Password"}
                  icons={<CiLock opacity={"0.9"} />}
                  errors={errors}
                  touched={touched}
                />
                {errors.password && touched.password ? (
                  <CiCircleAlert className={styles.iconCircl} />
                ) : null}
                {errors.password && touched.password ? (
                  <span className={styles.errorTextUnderInput}>
                    Please Enter Your Password
                  </span>
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
                    console.log("submit", values);
                  }}
                  className={styles.btn}
                >
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
  );
};

export default SignIn;
