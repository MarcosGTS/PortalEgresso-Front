import './App.css';
import Depoimentos from './templates/Depoimentos';
import Home from './templates/Home';
import Egressos from './templates/Egressos';
import Header from './components/header/Header';
import Login from './templates/Login';
import Register from './templates/Register';
import Perfil from './templates/Perfil';
import { Route, Routes } from "react-router-dom";
import {Bar} from "react-chartjs-2";

import logo from "./logo_ufma.png";

function App() {
  return <>
    <Header logo={logo}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/egressos" element={<Egressos/>}/>
      <Route path="/depoimentos" element={<Depoimentos/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/registro" element={<Register/>}/>
      <Route path="/perfil" element={<Perfil/>}/>
    </Routes>
  </>
}

export default App;
