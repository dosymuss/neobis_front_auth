import logo from "../image/logo.svg"
import FormAfto from '../components/FormaAfto';
import { Link } from "react-router-dom";


const HomePage = ()=>{
    return (
        <div className='App__div'>
        <img src={logo} alt='' />

        <FormAfto />

        <Link to='/reg'>Начать пользоваться</Link>

      </div>
    )
}

export default HomePage