import "../styles/RegPage.css"
import logo from "../image/logo.svg"
import RegPassForm from "../components/RegPassForm";




const RegisterPass = () => {
  return (
    <div className="reg__div">
    <img src={logo} alt="" />
    <h1>Регистрация</h1>
    <RegPassForm/>
</div>
  )
};

export default RegisterPass;
