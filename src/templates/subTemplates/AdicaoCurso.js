import React from "react";
import "../../components/depoimento/Depoimento.css";
import CursoService from "../../services/CursoService";
import EgressoService from "../../services/EgressoService";

class AdicaoCurso extends React.Component {
    state = {
        cursos: [
            {
                id: 1,
                nome: "Engenharia Eletrica"
            },
            {
                id: 2,
                nome: "Engenharia Mecanica"
            }
        ],
        cursoSelecionado: "",
        dataInicio: "", 
        dataConclusao: ""
        
    }

    constructor() {
        super();
        const apiToken = localStorage.getItem("Token");
        this.cursoService = new CursoService(apiToken);
        this.egressoService = new EgressoService(apiToken);
    }

    componentDidMount() {
        this.cursoService.obterCursos()
            .then(response => {
                this.setState({cursos: response.data})
            })
            .catch(erro => {
                console.log(erro);
            })
    }

    adicionarCurso() {
        const idEgresso = localStorage.getItem("Id");
        const idCurso = this.state.cursoSelecionado;
        
        const obj = {
            dataInicio: this.state.dataInicio,
            dataConclusao: this.state.dataConclusao
        };

        this.egressoService.adicionarCurso(idEgresso, idCurso, obj)
            .then(response => {
                console.log(response.data)
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
                this.adicionarCurso();
            }}
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <label for="curso-escolhido">Curso: </label>
            <select id="curso-escolhido"
                onChange={(e) => {
                    this.setState({cursoSelecionado: e.target.value})
                }}
                required
            >
                <option value="none" selected disabled hidden>Select an Option</option>
                {this.state.cursos.map(curso => {
                    return <option value={curso.id}>{curso.nome}</option>
                })}  
            </select>
            
            <label for="data-inicio">Data Inicio: </label>
            <input id="data-inicio" type="date"
                onChange={(e) =>{
                    this.setState({dataInicio: e.target.value})
                }}
                required
            />
        
            <label for="data-conclusao">Data Conclusao: </label>
            <input id="data-conclusao" type="date"
                onChange={(e) =>{
                    this.setState({dataConclusao: e.target.value})
                
                }}
                required
            />
        
            
            <button>Adicionar</button>
        </form>
    }
}

export default AdicaoCurso;