import { useState } from "react";
import logo from "../image/logo.svg";
import {Link} from "react-router-dom"
import Modal from "../ui/Modal";
import "../styles/RegPage.css"
import FormEmailReg from "../components/FormEmailReg";

const RegPage = () => {
    const [modalActive, setModalActive] = useState(false)
    const [emailState, setEmailState] = useState("")
  return (
    <>
      <div className="reg__div">
        <Link className="return__link" to="/">{"<--"}</Link>
        <img src={logo} alt="" />
        <h1>Регистрация</h1>
        <FormEmailReg  active={modalActive} setActive={setModalActive}setEm={setEmailState}/>
        <Modal active={modalActive} setActive={setModalActive}>
        <img src={logo}  alt="" />
                <div className="reg-modal-p__div">
                <p>На вашу почту «<span style={{color:"#5D5FEF"}}>{emailState}</span>» было отправлено письмо</p>
                </div>
                <div className="reg-modal-btn__div">
                <button className="reg-modal__btn"
                onClick={()=>{setModalActive(false)}}
                >Закрыть</button>
                </div>
        </Modal>
      </div>
    </>
  );
};

export default RegPage;
