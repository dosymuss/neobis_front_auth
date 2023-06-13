// import classes from "../styles/Modal.module.css"
import "../styles/modalStyle.css"

const Modal = ({active, setActive, children})=>{
return (
    <div className={active?"modal-active":"modal"}>
        <div className={'modal__content'} >
            {children}
        </div>
    </div>
)
}

export default Modal