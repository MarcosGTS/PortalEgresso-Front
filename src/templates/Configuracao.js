import React from "react";
import Carrossel from "../components/carrossel/Carrossel";
import Depoimento from "../components/depoimento/Depoimento";
import Paginacao from "../components/paginacao/Paginacao";
import EgressoService from "../services/EgressoService";
import DepoimentoService from "../services/DepoimentoService";
import AdicaoCurso from "./subTemplates/AdicaoCurso";

import "./Perfil.css";

import edit from "../imgs/edit.png";
import AdicaoProfissao from "./subTemplates/AdicaoProfissao";

class Configuracao extends React.Component {
    state = {
        egresso: {
            "id": 2,
            "nome": "Postman",
            "email": "postman@gmail.com",
            "cpf": "232323232",
            "resumo": "Postman resumo teste",
            "url_foto": null,
            "profissoes": [],
            "contatos": [],
            "cursoEgressoAssoc": []
        },
        depoimento: {},
    }

    constructor() {
        super();
        const apiToken = localStorage.getItem("Token");
        this.egressoService = new EgressoService(apiToken);
        this.depoimentoService = new DepoimentoService(apiToken);
    }
    
    componentDidMount() {
        const id = localStorage.getItem("Id");

        this.egressoService.obterEgressoCompleto(id)
            .then(response => {
                console.log(response);
                this.setState({egresso: response.data});
            })
            .catch(erro => {
                console.log(erro);
            })

        this.depoimentoService.obterDepoimentoEgresso(id)
            .then(response => {

                const depoimentos = response.data;
                const depoimento = depoimentos[0]
                delete depoimento.egresso;

                if (depoimentos.length > 0) 
                    this.setState({depoimento});
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    editarEgresso() {
        const id = localStorage.getItem("Id");
        const obj = this.state.egresso;

        this.egressoService.editarEgresso(id, obj)
            .then(response => {
                console.log(response)
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    editarDepoimento() {
        console.log(this.state);
        const obj =  this.state.depoimento;

        this.depoimentoService.editarDepoimento(obj.id, obj)
            .then(response => {
                console.log(response);
            })
            .catch(erro => {
                console.log(erro);
            })
    }

    render() {
        return <div className="home">
            <div className="perfil-informacoes">
                
                <div className="identificacao">
                    <img src={this.state.egresso.url_foto || "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0deYKiMiZCWnQiOU66QI_wHaHa%26pid%3DApi&f=1"}/>
                    <h2>{this.state.egresso.nome}</h2>
                </div>  
                <Informacoes 
                    email={this.state.egresso.email}
                    cursos={this.state.egresso.cursoEgressoAssoc}
                />
            </div>
            
            <div className="perfil-depoimento">
                <Paginacao>
                    <div name="Resumo">
                        <button className="edit-button"
                            onClick={() => this.editarEgresso()}
                        >
                            <img src={edit}/>
                        </button>
                        <textarea
                            value={this.state.egresso.resumo}
                            onChange={(e) => {
                                const egresso = this.state.egresso;
                                egresso.resumo = e.target.value;
                                this.setState({egresso});
                            }}
                        />
                    </div>
                    <div name="Depoimento">
                        <button className="edit-button"
                        onClick={() => this.editarDepoimento()}
                        >
                            <img src={edit}/>
                        </button>
                        <textarea
                            value={this.state.depoimento.texto}
                            onChange={(e) => {
                                const depoimento = this.state.depoimento;
                                depoimento.texto = e.target.value;
                                this.setState({depoimento});
                            }}
                        />
                    </div>
                </Paginacao>
            </div>

            <div className="perfil-experiencias">
                <h2>Experiencias</h2>
                <div>
                    {this.state.egresso.profissoes.map(prof => {
                        <Depoimento
                        nome={prof.cargo.nome}
                        depoimento={prof.descricao}    
                        />
                    })}
                </div>
            </div>
            <AdicaoCurso/>
            <AdicaoProfissao/>
        </div>   
    }

}

function Informacoes(props) {
    return <div className="informacoes">
        <ul>
            <li><div className="highlight">Email:</div> {props.email}</li>
        </ul>
        <Carrossel>
            {props.cursos.map(cursoAssoc => {
                const curso = cursoAssoc.curso;
                return (<div>
                    <li><div className="highlight">Curso:</div> {curso.nome}</li>
                    <li><div className="highlight">Data Inicio:</div> {formatDate(cursoAssoc.data_inicio)}</li>
                    <li><div className="highlight">Data Conclusao:</div> {formatDate(cursoAssoc.data_conclusao)}</li>
                </div>)
            })}
        </Carrossel>
    </div>
}

function formatDate(datas) {
    return `${datas[2]}/${datas[1]}/${datas[0]}`;
}

export default Configuracao;