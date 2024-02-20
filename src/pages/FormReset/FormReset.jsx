import { useState } from "react";
import { URLS } from "../../constants/urls.js"
import { Formik } from "formik";
import * as Yup from "yup";
import axios from 'axios';

import Button from "src/shared/Button/Button.jsx";
import Input from "src/shared/Input/Input.jsx";
import Typography from "src/shared/Typography/Typography.jsx";
import LogoBlack from "src/shared/LogoBlack/LogoBlack.jsx";
import Footer from "src/shared/Footer/Footer.jsx";

// import { Button, Input, Footer, LogoBlack, Typography } from 'src/shared';

import { MdOutlineMailOutline } from "react-icons/md";
import styles from "./FormReset.module.css";

const FormReset = () => {
  const [text, setText] = useState(
    "Enter your Email and instructions will be sent to you!",
  );

  function handleChangeText() {
    setText(() => {
      return "Check your mail and reset your password.";
    });
    return text;
  }

  return (
    <>
      <div className={styles["wrapper-formReset"]}>
        <div className={styles.formReset}>
          <LogoBlack />

          <Typography tag="h2" className={styles.heading}>
            {"Reset Password"}
          </Typography>

          <Typography tag="p" className={styles.text}>
            {"Reset Password With Chatvia."}
          </Typography>
        </div>

        <div className={styles["wrapper-form"]}>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Некорректный E-mail")
                .required("Обязательное поле"),
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
                <div>
                  {/* в этом спане текст меняется на другой по клику на кнопку Reset */}
                  <div className={styles["text-instructions"]}>
                    <span>{text}</span>
                  </div>

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

                  <Button
                    type={"submit"}
                    disabled={isSubmitting}
                    onClick={() => {
                      console.log("submit", values);
                      {
                        !errors.email && touched.email
                          ? handleChangeText()
                          : null;
                      }
                    }}
                  >
                    Reset
                  </Button>

                </div>
              </form>
            )}
          </Formik>
        </div>
        <div>
          <Footer
            href={URLS.signin}
            value={"Remember It ? "}
            valueRef={"Signin"}
          />
        </div>
      </div>
    </>
  );
};

export default FormReset;