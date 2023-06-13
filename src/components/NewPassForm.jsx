import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import "../styles/NewPassStyle.css";
import { useNavigate } from "react-router-dom";

const NewPassForm = () => {
  const [inpType, setInpType] = useState("password");
  const [conInpType, setConInpType] = useState("password");

  const validateSch = yup.object().shape({
    password: yup
      .string()
      .test(
        "password",
        "Пароль должен содержать хотя бы одну строчную букву, одну прописную букву, одну цифру и один специальный символ",
        (value) => {
          return (
            /[a-z]/.test(value) &&
            /[A-Z]/.test(value) &&
            /\d/.test(value) &&
            /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value)
          );
        }
      )
      .min(6, "Минимальная длина пароля - 6 символов")
      .max(15, "Максимальная длина пароля - 15 символов")
      .required("Пароль обязателен для заполнения"),
    confirmPass: yup
      .string()
      .oneOf([yup.ref("password")])
      .typeError("не соответстиве"),
  });

  const navigate = useNavigate();
  const redirect = () => {
    navigate("/");
  };

  return (
    <>
      <Formik
        initialValues={{
          password: "",
          confirmPass: "",
        }}
        onSubmit={(values) => {
            const obj = {
                "new_password": values.password,
                "new_password_confirm": values.confirmPass,
                "activation_code": "74145841"
              }
          console.log(values);
          fetch("http://16.171.11.58/api/v1/account/forgot_password_confirm/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(obj),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            })
            .catch((err) => console.error(err));
          redirect();
        }}
        validateOnBlur
        validationSchema={validateSch}
      >
        {({
          values,
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isValid,
          dirty,
          touched,
        }) => (
          <div className="form__div">
            <label className="form__label" htmlFor="password">
              <input
                className="form__inp"
                placeholder={"Придуймате пароль"} //{placeHoldPass===""?"Пароль":""}
                type={inpType}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <button
                className="showBtn"
                onClick={() => {
                  inpType === "password"
                    ? setInpType("text")
                    : setInpType("password");
                }}
              >
                <img
                  className="btnImg"
                  src={
                    inpType === "text"
                      ? "https://img.icons8.com/?size=1x&id=B2AL26R2LYT-&format=png"
                      : "https://img.icons8.com/?size=1x&id=121539&format=png"
                  }
                  alt=""
                />
              </button>
            </label>
            <label className="form__label" htmlFor="confirmPass">
              <input
                className="form__inp"
                placeholder={"Повторите пароль"} //{placeHoldPass===""?"Пароль":""}
                type={conInpType}
                value={values.confirmPass}
                name="confirmPass"
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <button
                className="showBtn"
                onClick={() => {
                  conInpType === "password"
                    ? setConInpType("text")
                    : setConInpType("password");
                }}
              >
                <img
                  className="btnImg"
                  src={
                    conInpType === "text"
                      ? "https://img.icons8.com/?size=1x&id=B2AL26R2LYT-&format=png"
                      : "https://img.icons8.com/?size=1x&id=121539&format=png"
                  }
                  alt=""
                />
              </button>
            </label>
            <ul>
              <li className={/[A-Z]/.test(values.password) ? "listBlue" : ""}>
                Заглавная буква
              </li>
              <li className={/\d/.test(values.password) ? "listBlue" : ""}>
                цифры
              </li>
              <li
                className={
                  /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(values.password)
                    ? "listBlue"
                    : ""
                }
              >
                символ
              </li>
              <li
                className={
                  values.password === values.confirmPass ? "listBlue" : ""
                }
              >
                Совпадение
              </li>
            </ul>
            {/* {touched.password&&errors.password&&<p>{errors.password}</p>} */}

            <button
              className="form__btn"
              type="submit"
              disabled={!isValid && !dirty}
              onClick={() => {
                handleSubmit();
              }}
            >
              Сбросить
            </button>
          </div>
        )}
      </Formik>
    </>
  );
};

export default NewPassForm;
