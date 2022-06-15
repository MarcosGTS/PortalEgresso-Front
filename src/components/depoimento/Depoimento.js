import './Depoimento.css'

function Depoimento (props) {
    return (
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
    )  
}

export default Depoimento;