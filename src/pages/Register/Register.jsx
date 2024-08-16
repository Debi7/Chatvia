// import { useState } from "react";
import { URLS } from "../../constants/urls.js"
import { Formik } from "formik";
import * as Yup from "yup";
import axios from 'axios';

// import { BASE_API_URL } from "../../api/requests.js"

// import Button from "src/shared/Button/Button.jsx";
// import Input from "src/shared/Input/Input.jsx";
// import Footer from "src/shared/Footer/Footer.jsx";
// import LogoBlack from "src/shared/LogoBlack/LogoBlack.jsx";
// import Typography from "src/shared/Typography/Typography.jsx";

import { Button, Input, Footer, LogoBlack, Typography } from 'src/shared';

import { MdOutlineMailOutline } from "react-icons/md";
import { LiaUser } from "react-icons/lia";
import { CiLock } from "react-icons/ci";

import styles from "./Register.module.css";

const Register = () => {
  // const [quote, setQuote] = useState('');

  // const registration = () => {
  //   axios.get(`${BASE_API_URL}/api/v1/Auth/registration`)
  //     .then(res => {
  //       console.log(res.data.values)
  //       setQuote(res.data.values)
  //     })
  //     .catch(err => console.log(err));
  // }


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
                errorText={"Please Enter Your Email"}
              />

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
                errorText={"Please Enter Your Username"}
              />

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
                errorText={"Please Enter Your Password"}
              />

              <Button
                type={"submit"}
                disabled={isSubmitting}
                onClick={() => {
                  axios.post("https://chatvia-chat.up.railway.app/api/v1/Auth/registration", {
                    EMAIL: values.email,
                    USERNAME: values.username,
                    PASSWORD: values.password,
                  })
                  console.log("submit", values);
                }
                }
              >
                Register
              </Button>
            </form>
          )}
        </Formik>

        <div className={styles["text-agree"]}>
          <span className={styles.p}>
            By registering you agree to the Chatvia{" "}
          </span>
          <a href={URLS.register} className={styles.textRef}>
            Terms of Use
          </a>
        </div>
      </div>

      <div>
        <Footer
          href={URLS.signin}
          value={"Already have an account ? "}
          valueRef={"Signin"}
        />
      </div>
    </div>
  );
};

export default Register;
