import { Formik } from "formik";
import * as Yup from "yup";

import Button from "src/shared/Button/Button.jsx";
import Input from "src/shared/Input/Input.jsx";
import Checkbox from "src/shared/Checkbox/Checkbox.jsx";
import Footer from "src/shared/Footer/Footer.jsx";
import LogoBlack from "src/shared/LogoBlack/LogoBlack.jsx";
import Typography from "src/shared/Typography/Typography.jsx";

// import { Button, Input, Checkbox, Footer, LogoBlack, Typography } from 'src/shared';

import { LiaUser } from "react-icons/lia";
import { CiLock } from "react-icons/ci";

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

              <Input
                label="Username"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder={"Enter email"}
                icons={<LiaUser opacity={"0.6"} />}
                errors={errors}
                touched={touched}
                errorText={"Please Enter Your Username"}
              />

              <div className={styles.textInput}>
                <a href="/reset" className={styles.textRef}>
                  Forgot password?
                  {/* TODO  нет cursor: pointer; ! */}
                </a>
              </div>
              <Input
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder={"Enter Password"}
                icons={<CiLock opacity={"0.9"} />}
                errors={errors}
                touched={touched}
                errorText={"Please Enter Your Password"}
              />

              <Checkbox checkboxText={"Remember me"} />

              <Button
                type={"submit"}
                disabled={isSubmitting}
                onClick={() => {
                  console.log("submit", values);
                }}
              >
                Sign in
              </Button>

            </form>
          )}
        </Formik>
      </div>

      <div>
        <Footer
          href="/register"
          value={"Don't have an account ? "}
          valueRef={"Signup now"}
        />
      </div>
    </div>
  );
};

export default SignIn;
