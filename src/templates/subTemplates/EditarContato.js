import React from "react";
import ContatoService from "../../services/ContatoService";
import EgressoService from "../../services/EgressoService";

class EditarContato extends React.Component {
    state = {
        contatos: [],
        endereco: "",
        contatoId: 1,
    }

    componentDidMount() {
        const contatoAssoc = this.props.contatoAssoc;
        const contatoId = contatoAssoc.contato.id;
        const endereco = contatoAssoc.endereco;
        
        this.setState({endereco});
        this.setState({prevContatoId: contatoId});
        this.setState({contatoId});

        const contatoService = new ContatoService();
        contatoService.obterTodosContatos()
            .then(response => {
                const contatos = response.data;
                this.setState({contatos});
            })
            .catch(erro => {
                alert(`${erro}`);
            })

    }

    editarContato() {
        const egressoId = localStorage.getItem("Id");
        const apiToken = localStorage.getItem("Token");
        const egressoService = new EgressoService(apiToken);

        const contatoId = this.state.contatoId;
        const prevContatoId = this.state.prevContatoId;
        const obj = {endereco: this.state.endereco};

        egressoService.editarContato(egressoId, prevContatoId, contatoId, obj)
            .then(response => {
                window.location.reload();
            })
            .catch(erro => {
                alert(`${erro}`);
            })
    }

    render() {
        const {contatos} = this.state;
        const {endereco} = this.state;
        const {contatoId} = this.state;
        return <form
            style={{
                display: "flex",
            }}

            onSubmit={(e) => {
                e.preventDefault()
                this.editarContato()
            }}
        >
            <select
                value={contatoId}
                onChange={(e) => this.setState({contatoId: e.target.value})}
                required
            >
                {contatos.map(contato => {
                    return <option value={contato.id}>{contato.nome}</option>
                }) }
            </select>
            <input type="url" placeholder="Url"
                value = {endereco}
                onChange={(e) => this.setState({endereco: e.target.value})}
                required
            />
            <button>Editar</button>
        </form>
    }
}

export default EditarContato;