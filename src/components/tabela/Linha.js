import { Link } from "react-router-dom";

function Linha (props) {
    return (
        
        <tr>
            
            <td>
            <Link to={`/perfil/${props.id}`} style={{textDecoration:"none"}}>
                {props.nome}
            </Link>
            </td>
            <td>{props.curso}</td>
            <td>{props.nivel}</td>
            <td>{props.data}</td>
            
        </tr>
    )
}

export default Linha;