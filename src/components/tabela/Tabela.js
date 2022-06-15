import './Tabela.css';

function Tabela(props) {
    return (
        <table className='content-table'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Curso</th>
                    <th>Nivel</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}

export default Tabela;