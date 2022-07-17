import './Depoimento.css'
import { Link } from 'react-router-dom';

function Depoimento (props) {
    return (
        <Link to={props.href || "#"} style={{ textDecoration: 'none' }}>
        <div className='depoimento-conteiner'>
            <div className="horizontal-align">
                <img src={props.src}/>
                <div>
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