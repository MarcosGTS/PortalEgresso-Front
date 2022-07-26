import React from "react";
import defaultImg from "../../imgs/perfil_default.png";
import EgressoService from "../../services/EgressoService";
import Button from 'react-bootstrap/Button';
import { Image } from "react-bootstrap";

class EdicaoPerfil extends React.Component{
    
    state = {}

    constructor() {
        super()
        const apiToken = localStorage.getItem("Token");
        this.service = new EgressoService(apiToken);
    }

    componentDidMount() {
        this.setState({egresso: this.props.egresso})
    }

    editarEgresso() {
        const obj = this.state.egresso;

        this.service.editarEgresso(obj.id, obj)
            .then(response => {
                console.log(response)
                window.location.reload(false);
            })
            .catch(erro => {
                alert(`${erro}`)
            })
    }

    render() {
        const egresso = this.state.egresso
        if (egresso) {
            return (
                <div className="perfil-informacoes">
                    <div className="identificacao">
                        <Image src={this.state.egresso.url_foto || defaultImg} roundedCircle/>
                        <input 
                            placeholder="Url"
                            value={egresso.url_foto}
                            onChange={(e) => {
                                egresso.url_foto = e.target.value;
                                this.setState({egresso});
                            }}
                        />
                    </div>  

                    <div className="depoimento-conteiner"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            height: "50%",
                            backgroundColor: "#282c34"
                        }}
                    >
                        <input 
                            placeholder="Nome"
                            value={egresso.nome} 
                            onChange={(e) => {
                                egresso.nome = e.target.value;
                                this.setState({egresso});
                            }}
                        />
                        <input 
                            placeholder="Email"
                            value={egresso.email} 
                            onChange={(e) => {
                                egresso.email = e.target.value;
                                this.setState({egresso});
                            }}
                        />
                        <input 
                            placeholder="Cpf"
                            value={egresso.cpf} 
                            onChange={(e) => {
                                egresso.cpf = e.target.value;
                                this.setState({egresso});
                            }}
                        />

                        <Button 
                            onClick={ () => this.editarEgresso()}
                        >Salvar</Button>
                    </div>
                </div> 
            )
        } else {
            return <h2>
                Algo nao esperado ocorreu
            </h2>
        }
        
    }
}

export default  EdicaoPerfil;