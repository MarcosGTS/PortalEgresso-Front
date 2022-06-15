
function Linha (props) {
    return (
        <tr>
            <td>{props.nome}</td>
            <td>{props.curso}</td>
            <td>{props.nivel}</td>
            <td>{props.data}</td>
        </tr>
    )
}

export default Linha;