import React from "react";
import Paginacao from "../components/paginacao/Paginacao";
import EgressoService from "../services/EgressoService";
import DepoimentoService from "../services/DepoimentoService";
import AdicaoCurso from "./subTemplates/AdicaoCurso";
import CartaExperiencia from "../components/cartaExperiencia/CartaExperiencia";
import ModalCentralizado from "../components/ModalCentralizado";
import Button from 'react-bootstrap/Button';

import "./Perfil.css";

import edit from "../imgs/edit.png";
import AdicaoProfissao from "./subTemplates/AdicaoProfissao";
import EdicaoPerfil from "./subTemplates/EdicaoPerfil";

class Configuracao extends React.Component {
    state = {
        depoimento: {},
        modalCurso: false,
        modalCargo: false,
    }

    constructor() {
        super();
        const apiToken = localStorage.getItem("Token");
        this.depoimentoService = new DepoimentoService(apiToken);
        this.egressoService = new EgressoService(apiToken);
    }
    
    componentDidMount() {
        const id = localStorage.getItem("Id");

        this.egressoService.obterEgressoCompleto(id)
            .then(response => {
                const egresso = response.data;
                this.setState({egresso});
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
        const apiToken = localStorage.getItem("Token");
        const egressoService = new EgressoService(apiToken);

        egressoService.editarEgresso(id, obj)
            .then(response => {
                console.log(response)
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    editarDepoimento() {
        const obj =  this.state.depoimento;
        const apiToken = localStorage.getItem("Token");
        const depoimentoService = new DepoimentoService(apiToken);

        depoimentoService.editarDepoimento(obj.id, obj)
            .then(response => {
                console.log(response);
            })
            .catch(erro => {
                console.log(erro);
            })
    }

    render() {

        if (!this.state.egresso) {
            return <h2>Algo nao esperado ocorreu</h2>
        }

        return <div className="home">
            <EdicaoPerfil
                egresso={this.state.egresso}
            />
            
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