import "./CartaExperiencia.css"

function CartaExperiencia(props) {
    return <div className="experience-card">
        {props.cargo}
        <div>
            {props.descricao}
        </div>
    </div>
}

export default CartaExperiencia;