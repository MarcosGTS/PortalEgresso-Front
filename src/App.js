import './App.css';
import Depoimentos from './templates/Depoimentos';
import Home from './templates/Home';
import Egressos from './templates/Egressos';
import Header from './components/header/Header';
import Login from './templates/Login';
import Register from './templates/Register';
import Perfil from './templates/Perfil';
import Configuracao from './templates/Configuracao';

import { Route, Routes } from "react-router-dom";

import logo from "./imgs/logo_ufma.png";

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
      <Route path="/config" element={<Configuracao/>}/>
    </Routes>
  </>
}

export default App;
