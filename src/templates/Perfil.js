import React from "react";
import Carrossel from "../components/carrossel/Carrossel";
import Paginacao from "../components/paginacao/Paginacao";
import EgressoService from "../services/EgressoService";
import DepoimentoService from "../services/DepoimentoService";
import "./Perfil.css";

import defaultImg from "../imgs/perfil_default.png";
import { useParams } from "react-router-dom";
import GerenricCard from "../components/GenericCard";
import GenericList from "../components/ListGroup";
import { Image } from "react-bootstrap";

export function withRoute(Children) {
    return (props) => {
        const match = useParams();
        return <Children {...props} match={match}/>
    }
}

class Perfil extends React.Component {
    state = {
        egresso: {
            "id": 2,
            "nome": "Postman",
            "email": "postman@gmail.com",
            "cpf": "232323232",
            "resumo": "Postman resumo teste",
            "url_foto": null,
            "profissoes": [{
                "descricao": "Foi muito legal",
                "cargo": {
                    "nome": "Engenheria de Software"
                },
                "faixaSalario" : {
                    "descricao": "2000-3000",
                }
            }],
            "contatos": [
                {
                    "id": {
                        "egresso_id": 2,
                        "contato_id": 1
                    },
                    "endereco": "https://github.com",
                    "contato": {
                        "id": 1,
                        "nome": "github",
                        "url_logo": "logo github"
                    }
                }
            ],
            "cursoEgressoAssoc": [
                {
                    "id": {
                        "curso_id": 1,
                        "egresso_id": 2
                    },
                    "data_inicio": [
                        2001,
                        3,
                        27
                    ],
                    "data_conclusao": [
                        2005,
                        3,
                        27
                    ],
                    "curso": {
                        "id": 1,
                        "nome": "Ciencia da Computacao",
                        "nivel": "Mestrado"
                    }
                },
                {
                    "id": {
                        "curso_id": 1,
                        "egresso_id": 2
                    },
                    "data_inicio": [
                        2001,
                        3,
                        27
                    ],
                    "data_conclusao": [
                        2005,
                        3,
                        27
                    ],
                    "curso": {
                        "id": 1,
                        "nome": "Engenharia Eletrica",
                        "nivel": "Mestrado"
                    }
                },
            ]
        },
        depoimento: {
            texto: ""
        },
    }

    constructor() {
        super();
        const apiToken = localStorage.getItem("Token");
        this.egressoService = new EgressoService(apiToken);
        this.depoimentoService = new DepoimentoService(apiToken);
    }
    
    componentDidMount() {
        const id = +this.props.match.id;

        if (id) {

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
                    if (response.data.length > 0)
                        this.setState({depoimento: response.data[0]});
                })
                .catch(erro => {
                    console.log(erro)
                })
        }
        
    }

    render() {

        const depoimento = this.state.depoimento;
        const resumo = this.state.egresso.resumo;
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
                >
                    <Image src={contato.url_logo} roundedCircle style={{width: "50px", height: "auto"}}/>
                    <a href={contatoAssoc.endereco}>{contato.nome}</a>
                </div>
            });
        }

        return <div className="home">
            <div className="perfil-informacoes">
                <div className="identificacao">
                    <img src={this.state.egresso.url_foto || defaultImg}/>
                    <h2>{this.state.egresso.nome}</h2>
                </div>  
                <Informacoes 
                    email={this.state["egresso"]["email"]}
                    cursos={this.state["egresso"]["cursoEgressoAssoc"]}
                />
            </div>

            <div className="perfil-depoimento">
                

                {
                contatos.length > 0 ?
                    <div style={{
                        display: "flex", 
                        flexDirection: "column",
                        marginRight: "20%",
                    }}>
                        <GenericList title="Contatos" list={contatos}/>
                    </div>
                    : ""
                }

                <Paginacao>
                    <div name="Resumo">{resumo}</div>
                    <div name="Depoimento">{depoimento.texto}</div>
                </Paginacao>   
            </div>

            <div className="perfil-experiencias">
                <h2>Experiencias</h2>
                <div>
                    {this.state.egresso.profissoes.map(prof => {
                        const cargo = prof.cargo.nome;
                        const faixaSalarial = prof.faixaSalario.descricao;
                        const descricao = prof.descricao;
                        const empresa = prof.empresa;

                        return <div>
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
        </div>
    }

}

function Informacoes(props) {
    return <div className="informacoes"
        style={{
            display: "flex", 
            flexDirection: "column",
            alignItems: "center",
        }}
    >
        <ul>
            <li><div className="highlight">Email:</div> {props.email}</li>
        </ul>
        <Carrossel>
            {props.cursos.map(cursoAssoc => {
                const curso = cursoAssoc.curso;
                return (<div>
                    <li><div className="highlight">Curso:</div> {curso.nome}</li>
                    <li><div className="highlight">Data Inicio:</div>{formatDate(cursoAssoc.data_inicio)}</li>
                    <li><div className="highlight">Data Conclusao:</div> {formatDate(cursoAssoc.data_conclusao)}</li>
                </div>)
                
            })}
        </Carrossel>
    </div>
}

function formatDate(datas) {
    const ano = `${datas[0]}`;
    const mes = `${datas[1]}`.padStart(2, "0");
    const dia = `${datas[2]}`.padStart(2, "0");
    return `${dia}/${mes}/${ano}`;
}

export default withRoute(Perfil);