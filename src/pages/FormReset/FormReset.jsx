import { useState } from "react";

import { Formik } from "formik";
import * as Yup from "yup";

import Button from "../../shared/Button/Button.jsx";
import Input from "../../shared/Input/Input.jsx";
import Typography from "../../shared/Typography/Typography.jsx";
import LogoBlack from "../../shared/LogoBlack/LogoBlack.jsx";
import Footer from "../../shared/Footer/Footer.jsx";

import { MdOutlineMailOutline } from "react-icons/md";
import { CiCircleAlert } from "react-icons/ci";

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
                <div className={styles["wrapper-input"]}>
                  {/* в этом спане текст меняется на другой по клику на кнопку Reset */}
                  <div className={styles["text-instructions"]}>
                    <span>{text}</span>
                  </div>

                  <div className={styles.inputReset}>
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
                      errors={errors}
                      touched={touched}
                    />
                    {errors.email && touched.email ? (
                      <CiCircleAlert className={styles.iconCircl} />
                    ) : null}

                    {errors.email && touched.email ? (
                      <span className={styles.errorTextUnderInput}>
                        Required
                      </span>
                    ) : null}
                  </div>

                  <div>
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
                      className={styles.btn}
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
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
  );
};

export default FormReset;

{
  /* <div className={styles["wrapper-input"]}>
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
 */
}
