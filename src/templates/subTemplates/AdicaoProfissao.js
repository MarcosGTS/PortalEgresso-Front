import React from "react";
import "../../components/depoimento/Depoimento.css";
import CargoService from "../../services/CargoService";
import EgressoService from "../../services/EgressoService";
import FaixaSalarioService from "../../services/FaixaSalarioService";

class AdicaoProfissao extends React.Component {
    state = {
        cargos: [],
        faixas: [],
        cargoSelecionado: "",
        empresa:"",
        descricao:"",
        dataRegistro: "", 
        faixaSalarial: "",
    }

    constructor() {
        super();
        const apiToken = localStorage.getItem("Token");
        this.cargoService = new CargoService(apiToken);
        this.faixaService = new FaixaSalarioService(apiToken);
        this.egressoService = new EgressoService(apiToken);
    }

    componentDidMount() {
        this.cargoService.obterTodosCargos()
            .then(response => {
                this.setState({cargos: response.data})
            })
            .catch(erro => {
                console.log(erro);
            })

        this.faixaService.obterTodasFaixas()
            .then(response => {
                this.setState({faixas: response.data})
            })
            .catch(erro => {
                console.log(erro);
            })
    }

    adicionarCargo() {
        const idEgresso = localStorage.getItem("Id");
        const idCargo = this.state.cargoSelecionado;
        const obj = {
            nomeEmpresa: this.state.empresa,
            descricao: this.state.descricao,
            dataRegistro: this.state.dataRegistro,
            faixaSalarioId: this.state.faixaSalarial
        }

        this.egressoService.adicionarCargo(idEgresso, idCargo, obj)
            .then(response => {
                console.log(response);
                window.location.reload(false);
            })
            .catch(erro => {
                alert(`${erro}`);
            })   
    }

    
    render() {
        return <form
            onSubmit={(e) => {
                e.preventDefault();
                this.adicionarCargo();
            }}
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <input 
                placeholder="Empresa"
                value={this.state.empresa}
                onChange={ (e) => {
                    this.setState({empresa: e.target.value})
                }}
                required
            />

            <label for="cargo-escolhido">Cargo: </label>
            <select id="cargo-escolhido"
                onChange={(e) => {
                    this.setState({cargoSelecionado: e.target.value})
                }}
                required
            >
                <option value="none" selected disabled hidden>Select an Option</option>
                {this.state.cargos.map(cargo => {
                    return <option value={cargo.id}>{cargo.nome}</option>
                })}  
            </select>
        
            <label for="faixasalario-escolhido">Faixa Salarial: </label>
            <select id="faixasalario-escolhido"
                onChange={(e) => {
                    this.setState({faixaSalarial: e.target.value})
                }}
                required
            >
                <option value="none" selected disabled hidden>Select an Option</option>
                {this.state.faixas.map(faixa => {
                    return <option value={faixa.id}>{faixa.descricao}</option>
                })}  
            </select>
        
            <label for="data-registro">Data Registro: </label>
            <input id="data-registro" type="date"
                onChange={(e) =>{
                    this.setState({dataRegistro: e.target.value})
                }}
                required
            />

            <textarea
                placeholder="Descricao" 
                value={this.state.descricao}
                onChange={(e) => {
                    this.setState({descricao: e.target.value})
                }}
            /> 

            <button>Adicionar</button>
        </form>
    }
}

export default AdicaoProfissao;