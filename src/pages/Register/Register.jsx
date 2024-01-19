import { Formik } from "formik";
import * as Yup from "yup";

import Button from "src/shared/Button/Button.jsx";
import Input from "src/shared/Input/Input.jsx";
import Footer from "src/shared/Footer/Footer.jsx";
import LogoBlack from "src/shared/LogoBlack/LogoBlack.jsx";
import Typography from "src/shared/Typography/Typography.jsx";

// import { Button, Input, Footer, LogoBlack, Typography } from 'src/shared';

import { MdOutlineMailOutline } from "react-icons/md";
import { LiaUser } from "react-icons/lia";
import { CiLock } from "react-icons/ci";
import { CiCircleAlert } from "react-icons/ci";

import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles["wrapper-register"]}>
      <div className={styles.wrapperImgText}>
        <LogoBlack />

        <Typography tag="h2" className={styles.heading}>
          {"Register"}
        </Typography>

        <Typography tag="p" className={styles.text}>
          {"Get your Chatvia account now."}
        </Typography>
      </div>

      <div className={styles["wrapper-form"]}>
        <Formik
          initialValues={{ email: "", username: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Некорректный E-mail")
              .required("Обязательное поле"),
            username: Yup.string().required("Обязательное поле"),
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
              <div className={styles["wrapper-input"]}>
                <Input
                  label="Email"
                  type={"email"}
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder={"Enter Email"}
                  icons={<MdOutlineMailOutline opacity={"0.6"} />}
                  errors={errors}
                  touched={touched}
                />

                {errors.email && touched.email ? (
                  <CiCircleAlert className={styles.iconCircl} />
                ) : null}
                {errors.email && touched.email ? (
                  <span className={styles.errorTextUnderInput}>Required</span>
                ) : null}
              </div>

              <div className={styles["wrapper-input"]}>
                <Input
                  label="Username"
                  type={"username"}
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder={"Enter Username"}
                  icons={<LiaUser opacity={"0.6"} />}
                  errors={errors}
                  touched={touched}
                />

                {errors.username && touched.username ? (
                  <CiCircleAlert className={styles.iconCircl} />
                ) : null}
                {errors.username && touched.username ? (
                  <span className={styles.errorTextUnderInput}>Required</span>
                ) : null}
              </div>

              <div className={styles["wrapper-input"]}>
                <Input
                  label="Password"
                  type={"password"}
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
                  <span className={styles.errorTextUnderInput}>Required</span>
                ) : null}
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
                  Register
                </Button>
              </div>
            </form>
          )}
        </Formik>

        <div className={styles["text-agree"]}>
          <span className={styles.p}>
            By registering you agree to the Chatvia{" "}
          </span>
          <a href="/register" className={styles.textRef}>
            Terms of Use
          </a>
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
  );
};

export default Register;
