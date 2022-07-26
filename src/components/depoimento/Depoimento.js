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
                    <h4>{props.nome}</h4>
                    <p>{props.curso}</p>
                </div>
            </div>
            <hr></hr>
            <p>{props.depoimento}</p>
            <hr></hr>
            <p style=
                {{
                    width: "fit-content",
                    marginRight: "0px",
                    marginLeft: "auto",
                    lineHeight: "2px",
                }}
            >{formatDate(props.data)}</p>
        </div>
        </Link>
    )  
}

function formatDate(datas) {
    const ano = `${datas[0]}`;
    const mes = `${datas[1]}`.padStart(2, "0");
    const dia = `${datas[2]}`.padStart(2, "0");
    return `${dia}/${mes}/${ano}`;
}

export default Depoimento;