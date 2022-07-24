import './Depoimento.css'
import { Link } from 'react-router-dom';
import defaultImg from "../../imgs/perfil_default.png";
import Image from 'react-bootstrap/Image'

function Depoimento (props) {
    return (
        <Link to={props.href || "#"} style={{ textDecoration: 'none' }}>
        <div className='depoimento-conteiner'>
            <div className="horizontal-align" >
                <Image src={props.src || defaultImg} roundedCircle/>
                <div style={{marginLeft: "40px"}}>
                    <h3>{props.nome}</h3>
                    <h4>{props.curso}</h4>
                </div>
            </div>
            <hr></hr>
            <p>{props.depoimento}</p>
            
        </div>
        </Link>
    )  
}

export default Depoimento;