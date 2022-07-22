import React from "react";
import CargoService from "../../services/CargoService";
import FaixaSalarioService from "../../services/FaixaSalarioService";

class EditarCargo extends React.Component {

    state = {
        cargos:[],
        faixas:[],
    }

    componentDidMount() {
        const prof = this.props.prof;
        const cargoId = prof.cargo.id;
        const faixaId = prof.faixaSalario.id;
        const prevCargoId = prof.cargo.id;
        const descricao = prof.descricao
        const empresa = prof.empresa;
        const dataRegistro = prof.data_registro;
        
        this.setState({prevCargoId});
        this.setState({cargoId});
        this.setState({faixaId});
        this.setState({dataRegistro: formatDate(dataRegistro)});
        this.setState({empresa});
        this.setState({descricao})

        const cargoService = new CargoService()

        cargoService.obterTodosCargos()
            .then(response => {
                const cargos = response.data;
                this.setState({cargos})
            })
            .catch(erro => {
                alert(`${erro}`)
            })
        
        const faixaService = new FaixaSalarioService();

        faixaService.obterTodasFaixas()
            .then(response => {
                const faixas = response.data;
                this.setState({faixas});
            })
            .catch(erro => {
                alert(`${erro}`);
            })
    }
    
    render() { 
        const {cargos} = this.state;
        const {faixas} = this.state;

        const {empresa} = this.state;
        const {cargoId} = this.state;
        const {faixaId} = this.state;
        const {descricao} = this.state;
        const {dataRegistro} = this.state;

        return <form>
            <input placeholder="Empresa"
                value={empresa}
            />

            <select
                onChange={(e) => {
                    this.setState({cargoId: e.target.value})
                }}
                value={cargoId}
            >
                {cargos.map(cargo => {
                    return <option value={cargo.id}>{cargo.nome}</option>
                })}
            </select>

            <select
                onChange={(e) => {
                    this.setState({faixaId: e.target.value})
                }}
                value={faixaId}
            >
                {faixas.map(faixa => {
                    return <option value={faixa.id}>{faixa.descricao}</option>
                })}
            </select>

            <input 
                type="date" 
                value={dataRegistro}
                onChange={(e) => {
                    this.setState({dataRegistro: e.target.value})
                }}
            />

            <textarea
                placeholder="Descricao"
                value={descricao}
                onChange={(e) => {
                    this.setState({descricao: e.target.value})
                }}
            />
        </form>
    }  
            
}

function formatDate(datas) {
    const ano = `${datas[0]}`;
    const mes = `${datas[1]}`.padStart(2, "0");
    const dia = `${datas[2]}`.padStart(2, "0");
    return `${ano}-${mes}-${dia}`;
}

export default EditarCargo;