import React from "react";
import Paginacao from "../components/paginacao/Paginacao";
import EgressoService from "../services/EgressoService";
import DepoimentoService from "../services/DepoimentoService";
import AdicaoCurso from "./subTemplates/AdicaoCurso";
import ModalCentralizado from "../components/ModalCentralizado";
import Button from 'react-bootstrap/Button';

import "./Perfil.css";

import AdicaoProfissao from "./subTemplates/AdicaoProfissao";
import EdicaoPerfil from "./subTemplates/EdicaoPerfil";
import AdicaoDepoimento from "./subTemplates/AdicaoDepoimento";
import EditarCurso from "./subTemplates/EditarCurso";
import EditarCargo from "./subTemplates/EditarCargo";
import GerenricCard from "../components/GenericCard";
import GenericList from "../components/ListGroup";
import { Image } from "react-bootstrap";
import AdicaoContato from "./subTemplates/AdicaoContato";
import EditarContato from "./subTemplates/EditarContato";

class Configuracao extends React.Component {
    state = {
        depoimento: {},
        modalCurso: false,
        modalCargo: false,
        modalDepoimento: false,
        modalContato: false,
        modalEditarContato: {
            modal: false, 
        },
        modalEditarCurso: {
            modal: false, 
        },
        modalEditarCargo: {
            modal: false, 
        }
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
                window.location.reload(false);
            })
            .catch(erro => {
                alert(`${erro}`);
            })
    }

    render() {
        
        if (!this.state.egresso) {
            return <h2>Algo inesperado ocorreu</h2>
        }

        let contatos = [];

        if (this.state.egresso.contatos) {
            contatos = this.state.egresso.contatos.map(contatoAssoc => {
                const contato = contatoAssoc.contato;
                return <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        minWidth: '150px',
                        cursor: "pointer"
                    }}

                    onClick={() => {
                        const {modalEditarContato} = this.state;
                        modalEditarContato.contatoAssoc = contatoAssoc; 
                        modalEditarContato.modal = true;
                        this.setState({modalEditarContato})
                    }}
                >
                    <Image src={contato.url_logo} roundedCircle style={{width: "50px", height: "auto"}}/>
                    <a href={contatoAssoc.endereco}>{contato.nome}</a>
                </div>
            });
        }

        return <div className="home">
            <EdicaoPerfil
                egresso={this.state.egresso}
            />
            
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>

                
                <div style={{
                    display: "flex", 
                    flexDirection: "column",
                    marginRight: "20%",
                }}>
                    <GenericList title="Contatos" list={contatos}/>
                    <Button
                        onClick={() => {
                            this.setState({modalContato: true})
                        }}
                    >Adicionar</Button>
                </div>
                
                <Paginacao>
                    <div name="Resumo">
                        
                        <textarea
                            value={this.state.egresso.resumo}
                            onChange={(e) => {
                                const egresso = this.state.egresso;
                                egresso.resumo = e.target.value;
                                this.setState({egresso});
                            }}
                        />

                        <Button
                            onClick={() => this.editarEgresso()}
                        >
                            Salvar
                        </Button>
                    </div>

                    <div name="Depoimento">
                        <textarea
                            value={this.state.depoimento.texto}
                            onChange={(e) => {
                                const depoimento = this.state.depoimento;
                                depoimento.texto = e.target.value;
                                this.setState({depoimento});
                            }}
                        />

                        <Button
                        onClick={() => {
                            if (!this.state.depoimento.texto) 
                                this.setState({modalDepoimento: true})
                            else 
                                this.editarDepoimento()        
                        }}
                        >
                            {this.state.depoimento.texto ? "Salvar" : "Adicionar"}
                        </Button>
                    </div>
                </Paginacao>
            </div>

            <div className="perfil-experiencias">
                <div style={{width: "fit-content"}}>
                    <Button onClick={() => {
                        this.setState({modalCurso: true})
                        }}
                        size="lg"
                    >Adicionar Curso</Button>
                </div>

                <div>
                    {this.state.egresso.cursoEgressoAssoc.map(cursoAssoc => {
                        const curso = cursoAssoc.curso;
                        const dataInicio = formatDate(cursoAssoc.data_inicio);
                        const dataConclusao = formatDate(cursoAssoc.data_conclusao);

                        return <div onClick = {() => {
                            const {modalEditarCurso} = this.state;
                            modalEditarCurso.cursoAssoc = cursoAssoc; 
                            modalEditarCurso.modal = true;
                            this.setState({modalEditarCurso})
                            }}
                            style={{cursor: "pointer"}}
                        >
                            <GerenricCard
                                title = {curso.nome}
                                subTitle = {curso.nivel}
                            >
                                <div><span>Data Inicio:</span> {dataInicio}</div>
                                <div><span>Data Conclusao:</span> {dataConclusao}</div>
                            </GerenricCard>
                        </div>
                    })}
                </div>
            </div>

            <div className="perfil-experiencias">
                <div style={{width: "fit-content"}}>
                    <Button onClick={() => {
                        this.setState({modalCargo: true})
                        }}
                        size="lg"
                    >Adicionar Cargo</Button>
                </div>
                
                <div>
                    {this.state.egresso.profissoes.map(prof => {
                        const cargo = prof.cargo.nome;
                        const faixaSalarial = prof.faixaSalario.descricao;
                        const descricao = prof.descricao;
                        const empresa = prof.empresa;

                        return <div
                            onClick = {() => {
                                const {modalEditarCargo} = this.state;
                                modalEditarCargo.prof = prof; 
                                modalEditarCargo.modal = true;
                                this.setState({modalEditarCargo})
                            }}
                            style={{
                                cursor: "pointer",
                            }}
                        >
                        <GerenricCard
                            title={cargo}
                            subTitle={faixaSalarial}
                            description={descricao}
                        >
                            <div>{empresa}</div>
                            <div></div>
                        </GerenricCard>
                        </div>
                        
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

            <ModalCentralizado 
                titulo="Adicionar Depoimento"
                show={this.state.modalDepoimento}
                onHide={() => {
                    this.setState({modalDepoimento: false})
                }}
            >
                <AdicaoDepoimento/>
            </ModalCentralizado>

            <ModalCentralizado 
                titulo="Adicionar Contato"
                show={this.state.modalContato}
                onHide={() => {
                    this.setState({modalContato: false})
                }}
            >
                <AdicaoContato/>
            </ModalCentralizado>

            <ModalCentralizado 
                titulo="Editar Curso"
                show={this.state.modalEditarCurso.modal}
                onHide={() => {
                    const {modalEditarCurso} = this.state;
                    modalEditarCurso.modal = false
                    this.setState({modalEditarCurso})
                }}
            >
                <EditarCurso cursoAssoc={this.state.modalEditarCurso.cursoAssoc}/>
            </ModalCentralizado>

            <ModalCentralizado 
                titulo="Editar Cargo"
                show={this.state.modalEditarCargo.modal}
                onHide={() => {
                    const {modalEditarCargo} = this.state;
                    modalEditarCargo.modal = false
                    this.setState({modalEditarCargo})
                }}
            >
                <EditarCargo prof={this.state.modalEditarCargo.prof}/>
            </ModalCentralizado>

            <ModalCentralizado 
                titulo="Editar Contato"
                show={this.state.modalEditarContato.modal}
                onHide={() => {
                    const {modalEditarContato} = this.state;
                    modalEditarContato.modal = false
                    this.setState({modalEditarContato})
                }}
            >
                <EditarContato contatoAssoc={this.state.modalEditarContato.contatoAssoc}/>
            </ModalCentralizado>
        </div>   
    }

}

function formatDate(datas) {
    const ano = `${datas[0]}`;
    const mes = `${datas[1]}`.padStart(2, "0");
    const dia = `${datas[2]}`.padStart(2, "0");
    return `${dia}/${mes}/${ano}`;
}
export default Configuracao;