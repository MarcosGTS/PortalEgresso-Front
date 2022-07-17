import "./Header.css";
import Dropdown from 'react-bootstrap/Dropdown';
import defaultImg from "../../imgs/perfil_default.png";


import { Link } from "react-router-dom";

function Header (props) {
    const id = localStorage.getItem("Id");
    let foto = localStorage.getItem("Foto");
    
    if (foto == "null") foto = defaultImg;

    if (localStorage.getItem("Token")) {
        
        return (
            <header className="header">
                <Link to="/"><img src={props.logo} className="logo" alt="logo"/></Link>
                <ul className="header-list">
                    <li><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
                    <li><Link to="/depoimentos" style={{ textDecoration: 'none' }}>Depoimentos</Link></li>
                    <li><Link to="/egressos" style={{ textDecoration: 'none' }}>Egressos</Link></li>
                </ul>
                
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <img src={foto} className="foto-perfil"/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={e =>{ 
                                window.location.href = `/perfil/${id}`;
                            }}>Meu perfil</Dropdown.Item>
                        <Dropdown.Item onClick={e =>{ 
                                window.location.href = "/config";
                            }}>Configuracoes</Dropdown.Item>
                        <Dropdown.Item onClick={e =>{ 
                                window.location.href = "/";
                                localStorage.clear();
                            }}>
                            Sair
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </header>
        )
    }else {
        return (
            <header className="header">
                <Link to="/"><img src={props.logo} className="logo" alt="logo"/></Link>
                <ul className="header-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/depoimentos">Depoimentos</Link></li>
                    <li><Link to="/egressos">Egressos</Link></li>
                </ul>
                <button onClick={e => window.location.href = "/login"}>Login</button>
            </header>
        )
    }
    
}

export default Header;