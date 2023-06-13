import { useState } from "react"
import FormEmail from "../components/FormEmail"
import logo from "../image/logo.svg"
import clsses from "../styles/Config.module.css"
import Modal from "../ui/Modal"
import { Link } from "react-router-dom"


const Config = ()=>{
    const [email, setEmail] = useState("")
    const [modalAct, setModalAct] = useState(false)
    return(
        <>
            <Modal active={modalAct} setActive = {setModalAct}>
                <img src={logo}  alt="" />
                <div className={clsses['config-modal__p']}>
                <p className={clsses['config-modal__text']}>На вашу почту «<span style={{color:"#5D5FEF"}}>{email}</span>» было отправлено письмо</p>
                </div>
                <div className={clsses['config-modal__btn']}>
                <button className={clsses['config__btn']}
                onClick={()=>{setModalAct(false)}}
                >Закрыть</button>
                </div>
                
            </Modal>
        <div className={clsses['config__div']}>
            <Link className={clsses['config__a']} to="/">{"<--"}</Link>
            <img src={logo} alt="" />
            <h1>Сброс пароля</h1>
            
            <div className={clsses['config__div_p']}>
                <div className={clsses['config__p']}>
                <p>На введенную вами почту мы отправим ссылку, перейдя по которой вы сможете сбросить пароль</p>
                </div>
            </div>


            <FormEmail setEm={setEmail} active={modalAct} setActive={setModalAct}/>
        </div>
        </>
        
    )
}

export default Config