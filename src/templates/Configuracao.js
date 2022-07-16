import React from "react";
import Paginacao from "../components/paginacao/Paginacao";
import EgressoService from "../services/EgressoService";
import DepoimentoService from "../services/DepoimentoService";
import AdicaoCurso from "./subTemplates/AdicaoCurso";
import CartaExperiencia from "../components/cartaExperiencia/CartaExperiencia";
import ModalCentralizado from "../components/ModalCentralizado";
import Button from 'react-bootstrap/Button';

import "./Perfil.css";

import defaultImg from "../imgs/perfil_default.png";
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
        modalCurso: false,
        modalCargo: false,
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
                    <img src={this.state.egresso.url_foto || defaultImg}/>
                    <h2>{this.state.egresso.nome}</h2>
                </div>  
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
                <Button onClick={() => {
                    this.setState({modalCurso: true})
                }}>Adicionar Curso</Button>

                <div>
                    {this.state.egresso.cursoEgressoAssoc.map(cursoAssoc => {
                        const curso = cursoAssoc.curso;
                        return (<div className="depoimento-conteiner">
                            <div><span className="highlight" >Curso:</span>
                                {curso.nome}
                            </div> 
                            <div><span className="highlight" >Data Inicio:</span>
                                {formatDate(cursoAssoc.data_inicio)}
                            </div> 
                            <div><span className="highlight" >Data Conclusao:</span>
                                {formatDate(cursoAssoc.data_conclusao)}
                            </div> 
                        </div>)
                    })}
                </div>
            </div>

            <div className="perfil-experiencias">
                <Button onClick={() => {
                    this.setState({modalCargo: true})
                }}>Adicionar Cargo</Button>

                <h2>Experiencias</h2>
                <div>
                    {this.state.egresso.profissoes.map(prof => {
                        return <CartaExperiencia
                        cargo={prof.cargo.nome}
                        faixaSalario={prof.faixaSalario.descricao}
                        descricao={prof.descricao}    
                        />
                    })}
                </div>
            </div>

            <ModalCentralizado 
                titulo="Adicionar Curso"
                show={this.state.modalCurso}
                onHide={() => {
                    this.setState({modalCurso: false})
                }}
            >
                <AdicaoCurso/>
            </ModalCentralizado>
            
            <ModalCentralizado 
                titulo="Adicionar Experiencia"
                show={this.state.modalCargo}
                onHide={() => {
                    this.setState({modalCargo: false})
                }}
            >
                <AdicaoProfissao/>
            </ModalCentralizado>
        </div>   
    }

}

function formatDate(datas) {
    return `${datas[2]}/${datas[1]}/${datas[0]}`;
}

export default Configuracao;