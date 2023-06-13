import { Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";

const FormAfto = () => {
  const [error, setError] = useState(false);
  const [inpType, setInpType] = useState("password");

  const validateSchema = yup.object().shape({
    email: yup
      .string()
      .typeError("введите имя а не номер")
      .email()
      .required("обязательно"),
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
  });

  return (
    <div className="formDiv">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validateOnBlur
        onSubmit={(values) => {
          fetch("http://16.171.11.58/api/v1/account/login/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(values),
          }).then(res=>res.json())
          .then((data)=>{
            console.log(data)
          })
          .catch(err=>console.error(err))
          
          console.log(values);
        }}
        validationSchema={validateSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
          resetForm,
        }) => (
          <div>
            <label
              className={error === false ? "homelabel" : "errorLabel"}
              htmlFor="email"
            >
              <span></span>
              <input
                placeholder={"Электронная почта"}
                className={error === false ? "homeInp" : "errorInp"}
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </label>

            <label
              className={error === false ? "homelabel" : "errorLabel"}
              htmlFor="password"
            >
              {/* <span className='placeInp'>{placeHoldPass==="click"?"Пароль":""}</span> */}
              <input
                placeholder={"Пароль"} //{placeHoldPass===""?"Пароль":""}
                className={error === false ? "homeInpPass" : "errorInpPass"}
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
            <div className="errDiv">
              {touched.password &&
                errors.password && (
                  <span className="errorMess">неверный логин или пароль</span>
                ) &&
                setError(true)}
              <Link className="redir" to="/config">
                {" "}
                Забыли пароль
              </Link>
            </div>
            <button
              className="enterBtn"
              type="submit"
              onClick={handleSubmit}
              disabled={!isValid && !dirty}
            >
              Войти
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default FormAfto;
