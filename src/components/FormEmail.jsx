import { Formik } from "formik";
import * as yup from "yup";
import classes from "../styles/Config.module.css";

const FormEmail = ({ active, setActive, setEm }) => {
  const validateSch = yup.object().shape({
    email: yup
      .string()
      .email("поле должно быть емаилом")
      .required("обязательно"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={(values) => {
          console.log(values.email);
          setEm(values.email);
          fetch("http://16.171.11.58/api/v1/account/forgot_password/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(values),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            })
            .catch((err) => console.error(err));
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
          <div>
            <label htmlFor="email">
              <input
                className={classes.config__inp}
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </label>
            {/* {touched.email&&errors.email&&<span>{errors.email}</span>} */}
            <div className={classes["config__btn_div"]}>
              <button
                className={classes["config__btn"]}
                disabled={!isValid && !dirty}
                type="submit"
                onClick={() => {
                  handleSubmit();
                  isValid ? setActive(true) : setActive(false);
                  isValid ? setActive(true) : setActive(false);
                }}
              >
                Далее
              </button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default FormEmail;
