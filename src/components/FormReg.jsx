import { Formik } from "formik"
import {useNavigate} from "react-router-dom"
import * as yup from "yup"
import "../styles/NewPassStyle.css"


const FormReg = ()=>{
    const validateSch = yup.object().shape({
        firstName: yup.string().required("обязательно для заполнения"),
        lastName: yup.string().required("обязательно для заполнения"),
        birthday: yup.date().required('Введите дату рождения'),
        telep:  yup.string().matches(/^\d{10}$/, 'Неправильный формат телефонного номера')
    })
    const navigate = useNavigate()
    const redirect = ()=>{
        navigate("/regpass")
    }

    return (
        <div>
            <Formik
            initialValues={{
                firstName:"",
                lastName:"",
                birthday:"",
                telep:""
            }}
            validateOnBlur
            validationSchema={validateSch}
            onSubmit={(values)=>{
                fetch("http://16.171.11.58/api/v1/account/register/", {
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
                console.log(values)
                redirect()
            }}
            >
                {({values,errors,handleBlur,handleSubmit,handleChange,isValid,dirty,touched})=>(
                    <div className="form__div">
                        <div className="form__label">
                        <input 
                        className="form__inp"
                            type="text" 
                            name="firstName"
                            value={values.firstName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            />
                        </div>

                        <div className="form__label">
                        <input 
                        className="form__inp"
                            type="text" 
                            name="lastName"
                            value={values.lastName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            />
                        </div>

                        <div className="form__label">
                        <input 
                        className="form__inp"
                            type="text" 
                            name="birthday"
                            value={values.birthday}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            />
                        </div>

                        <div className="form__label">
                        <input 
                        className="form__inp"
                            type="text" 
                            name="telep"
                            value={values.telep}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            />
                        </div>

                        {touched.telep&&errors.telep&&<span>{errors}</span>}
                        <div>
                            <button
                            className="form__btn"
                            onClick={handleSubmit}
                            disabled={!isValid&&!dirty}
                            >
                                Зарегистрироваться
                            </button>
                        </div>
                    </div>
                    
                    
                    
                )}
            </Formik>
        </div>
    )
}


export default FormReg