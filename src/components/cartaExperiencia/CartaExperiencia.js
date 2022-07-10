import "../depoimento/Depoimento.css";

function CartaExperiencia(props) {
    return <div className="depoimento-conteiner">
        <h3>{props.cargo}</h3>
        <h4>{props.faixaSalario}</h4>
        <div>
            {props.descricao}
        </div>
    </div>
}

export default CartaExperiencia;