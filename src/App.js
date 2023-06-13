import './App.css';
// import logo from "./image/logo.svg"
import { Route, Routes } from "react-router-dom"
import RegPage from './pages/RegPage';
// import FormAfto from './components/FormaAfto';
import Config from './pages/Config';
import HomePage from './pages/HomePage';
import NewPass from './pages/NewPass';
import RegisterPageForm from './pages/RegisterPageForm';
import RegisterPass from './pages/RegisterPass';


function App() {


  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/reg' element={<RegPage />} />
        <Route path='/config' element={<Config/>} />
        <Route path='/newpass' element={<NewPass/>}/>
        <Route path='/regform' element={<RegisterPageForm/>}/>
        <Route path='/regpass' element={<RegisterPass/>}/>

      </Routes>
    </div>
  );
}

export default App;
