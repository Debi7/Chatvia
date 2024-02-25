import { URLS } from "../../constants/urls.js"
import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
// import axios from 'axios';

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
  const navigate = useNavigate();

  const [checked, setChecked] = useState(true);

  const handleChangeChecked = () => {
    setChecked((checked) => !checked)
    console.log(checked)
  }

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
              .email("Incorrect Email format")
              .required("Please Enter Your Username"),
            password: Yup.string().required("Please Enter Your Password"),
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
              />

              <div className={styles.textInput}>
                <a href={URLS.reset} className={styles.textRef}>
                  Forgot password?
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
              />

              <Checkbox
                checkboxText={"Remember me"}
                onChange={handleChangeChecked}
              // ref={(c) => c.refs.field}
              />

              <Button
                type={"submit"}
                disabled={isSubmitting}
                onClick={() => {
                  {
                    !errors.email && touched.email &&
                      !errors.password && touched.password
                      ? axios.post("https://chatvia-chat.up.railway.app/api/v1/Auth/login", {
                        EMAIL: values.email,
                        PASSWORD: values.password,
                        REMEMBER_TOKEN: checked,
                      }) && navigate(URLS.chat, { replace: false })
                      : null
                  }
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
          href={URLS.register}
          value={"Don't have an account ? "}
          valueRef={"Signup now"}
        />
      </div>
    </div>
  );
};

export default SignIn;
