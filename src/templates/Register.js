import LayoutComponentes from "../components/layoutCompent/LayoutComponents";
import EgressoService from "../services/EgressoService";
import logo from '../imgs/logo_ufma.png';
import React from "react";

class Register extends React.Component {
    state = {
        nome: "",
        email: "",
        cpf: "",
        senha: "",
        resumo: "",
        url_foto: "",
    }

    constructor() {
        super();
        const apiToken = localStorage.getItem("Token");
        this.service = new EgressoService(apiToken);
    }

    register() {
        const obj = this.state;

        this.service.salvarEgresso(obj)
            .then(response => {
                console.log(response)
            })
            .catch(erro => {
                console.log(erro)
            })
    }
    
    render() {
        return (
            <LayoutComponentes>
                <form className="login-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    this.register();
                }}
                >
                    <span className="login-form-title">Criar Conta</span>
                    <span className="login-form-title">
                        <img src={logo} alt="Jovem progaramador" />
                    </span>
    
                    <div className="wrap-input">
                        <input
                            className={this.state.email !== "" ? 'has-val input' : 'input'}
                            type="email"
                            value={this.state.email}
                            onChange={e => this.setState({email: e.target.value})}
                        />
                        <span className="focus-input" data-placeholder="Email"></span>
                    </div>
    
                    <div className="wrap-input">
                        <input
                            className={this.state.senha !== "" ? 'has-val input' : 'input'}
                            type="password"
                            value={this.state.senha}
                            onChange={e => this.setState({senha: e.target.value})}
                        />
                        <span className="focus-input" data-placeholder="Senha"></span>
                    </div>
    
                    <div className="wrap-input">
                        <input
                            className={this.state.nome !== "" ? 'has-val input' : 'input'}
                            type="nome"
                            value={this.state.nome}
                            onChange={e => this.setState({nome: e.target.value})}
                        />
                        <span className="focus-input" data-placeholder="Nome"></span>
                    </div>
    
                    <div className="wrap-input">
                        <input
                            className={this.state.cpf !== "" ? 'has-val input' : 'input'}
                            type="cpf"
                            value={this.state.cpf}
                            onChange={e => this.setState({cpf: e.target.value})}
                        />
                        <span className="focus-input" data-placeholder="Cpf"></span>
                    </div>
    
                    <div className="container-login-form-btn">
                        <button className="login-form-btn">Registrar</button>
                    </div>
    
                    <div className="text-center">
                        <span className="txt1">Já possui conta?</span>
                        <a className="txt2" href="#">Acessar com Email e Senha.</a>
                    </div>
    
                </form>
            </LayoutComponentes>
        );
    }
    
}

export default Register;