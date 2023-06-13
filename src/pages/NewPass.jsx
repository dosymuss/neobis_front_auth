import NewPassForm from "../components/NewPassForm"
// import ring from "../image/ring.svg" 
import logo from "../image/logo.svg"
import "../styles/NewPassStyle.css"
import { Link } from "react-router-dom"

const NewPass = ()=>{
    return(
        <div className="passDiv">
            {/* <div className="pass__message">
                <img src={ring} alt="" />
                <span>Пароль успешно спрошен!</span>
            </div> */}
            <div className="pass__main">
                <Link className="return__a" to="/config">{"<--"}</Link>
                <img src={logo} alt="" />
                <h1>Новый пароль</h1>
                <NewPassForm/>
            </div>
        </div>
    )
}


export default NewPass