import FormReg from "../components/FormReg"
import logo from "../image/logo.svg"
import "../styles/RegPage.css"

const RegisterPageForm = ()=>{
    return(
        <div className="reg__div">
            <img src={logo} alt="" />
            <h1>Регистрация</h1>
            <FormReg/>
        </div>
    )
}

export default RegisterPageForm