import React from "react";
import Carrossel from "../components/carrossel/Carrossel";
import Depoimento from "../components/depoimento/Depoimento";
import Paginacao from "../components/paginacao/Paginacao";
import EgressoService from "../services/EgressoService";
import DepoimentoService from "../services/DepoimentoService";
import "./Perfil.css";

import defaultImg from "../imgs/perfil_default.png";

class Perfil extends React.Component {
    state = {
        egresso: {
            "id": 2,
            "nome": "Postman",
            "email": "postman@gmail.com",
            "cpf": "232323232",
            "resumo": "Postman resumo teste",
            "url_foto": null,
            "profissoes": [],
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
            texto: "Teste depoimento"
        },
    }

    constructor() {
        super();
        this.egressoService = new EgressoService();
        this.depoimentoService = new DepoimentoService();
    }
    
    componentDidMount() {
        this.egressoService.obterEgressoCompleto(2)
            .then(response => {
                console.log(response);
                this.setState({egresso: response.data});
            })
            .catch(erro => {
                console.log(erro);
            })

        this.depoimentoService.obterDepoimentoEgresso(2)
            .then(response => {
                console.log(response.data);
                if (response.data.length > 1)
                    this.setState({depoimento: response.data[0]});
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    render() {
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
                <Paginacao>
                    <div name="Resumo">
                        {this.state.egresso.resumo}
                    </div>
                    <div name="Depoimento">
                        {this.state.depoimento.texto}
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
                    <li><div className="highlight">Data Inicio:</div> {curso.dataInicio}</li>
                    <li><div className="highlight">Data Conclusao:</div> {curso.dataConclusao}</li>
                </div>)
                
            })}
        </Carrossel>
    </div>
}

export default Perfil;