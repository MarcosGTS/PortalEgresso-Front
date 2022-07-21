import React from "react";
import { Button } from "react-bootstrap";
import DepoimentoService from "../../services/DepoimentoService";

class AdicaoDepoimento extends React.Component {
    
    state = {
        texto: ""
    }

    adicionarDepoimento() {
        const apiToken = localStorage.getItem("Token");
        const id = localStorage.getItem("Id");

        const service = new DepoimentoService(apiToken);
        const obj = {
            texto: this.state.texto
        }

        service.adicionarDepoimento(id, obj)
            .then(response => {
                window.location.reload(false);
            })
            .catch(erro => {
                console.log(erro);
            })
    }
    
    render() {
        return <form onSubmit={(e) => {
            e.preventDefault()
            this.adicionarDepoimento()
        }}> 
                <textarea
                    placeholder="Depoimento" 
                    value={this.state.texto}
                    onChange={(e) => {
                        this.setState({texto: e.target.value})
                    }}
                /> 
                <button>Adicionar</button>
            </form>
    }
}

export default AdicaoDepoimento;