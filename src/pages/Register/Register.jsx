import { Formik } from 'formik';
import * as Yup from 'yup';

import Button from "../../shared/Button/Button.jsx";
import Input from "../../shared/Input/Input.jsx";
import Footer from "../../shared/Footer/Footer.jsx";
import LogoBlack from "../../shared/LogoBlack/LogoBlack.jsx";
import Typography from "../../shared/Typography/Typography.jsx";

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
        <Formik
          initialValues={{ email: '', password: '', username: '' }}
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

              <div className={styles["wrapper-input"]}>
                <div className={styles.textInput}>
                  <span>Email</span>
                </div>
                <Input
                  type={"email"}
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder={"Enter Email"}
                  icons={<MdOutlineMailOutline opacity={"0.6"} />}
                />

                {errors.email && touched.email ? (
                  <CiCircleAlert className={styles.iconCircl} />
                ) : null}
                {errors.email && touched.email ? (
                  <span className={styles.errorTextUnderInput}>Required</span>
                ) : null}

              </div>


              <div className={styles["wrapper-input"]}>
                <div className={styles.textInput}>
                  <span>Username</span>
                </div>
                <Input
                  type={"username"}
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder={"Enter Username"}
                  icons={<LiaUser opacity={"0.6"} />}
                />

                {errors.email && touched.email ? (
                  <CiCircleAlert className={styles.iconCircl} />
                ) : null}
                {errors.email && touched.email ? (
                  <span className={styles.errorTextUnderInput}>Required</span>
                ) : null}

              </div>


              <div className={styles["wrapper-input"]}>
                <div className={styles.textInput}>
                  <span>Password</span>
                </div>
                <Input
                  type={"password"}
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
                  <span className={styles.errorTextUnderInput}>Required</span>
                ) : null}

              </div>

              <div>
                <Button
                  type={"submit"}
                  disabled={isSubmitting}
                  onClick={() => {
                    console.log("submit", values)
                  }}
                  className={styles.btn}>
                  Register
                </Button>
              </div>
            </form>
          )}
        </Formik>

        <div className={styles["text-agree"]}>
          <span className={styles.p}>By registering you agree to the Chatvia </span>
          <a href="/register" className={styles.textRef}>Terms of Use</a>
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
  )
}

export default Register;