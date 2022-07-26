import LayoutComponentes from "../components/layoutCompent/LayoutComponents";
import EgressoService from "../services/EgressoService";
import logo from '../imgs/logo_ufma.png';
import React from "react";
import { Link } from "react-router-dom";

class Register extends React.Component {
    state = {
        nome: "",
        email: "",
        cpf: "",
        senha: "",
        senhaConf: "",
        resumo: "",
        url_foto: "",
    }

    constructor() {
        super();
        const apiToken = localStorage.getItem("Token");
        this.service = new EgressoService(apiToken);
    }

    register() {
        const obj = {
            nome: this.state.nome,
            email: this.state.email,
            cpf: this.state.cpf,
            senha: this.state.senha,
            resumo: this.state.resumo, 
            url_foto: this.state.url_foto,
        }

        if (this.state.senha === this.state.senhaConf) {
            this.service.salvarEgresso(obj)
            .then(response => {
                console.log(response)
                alert("Conta criada com sucesso")
                window.location.href = "/login";
            })
            .catch(erro => {
                alert(erro);
                console.log(erro)
            })
        } else {
            alert("Senhas devem ser iguais")
        }
        
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
                            style={{color: "whitesmoke"}}
                            required
                        />
                        <span className="focus-input" data-placeholder="Email"></span>
                    </div>
    
                    <div className="wrap-input">
                        <input
                            className={this.state.nome !== "" ? 'has-val input' : 'input'}
                            type="nome"
                            value={this.state.nome}
                            onChange={e => this.setState({nome: e.target.value})}
                            style={{color: "whitesmoke"}}
                            required
                        />
                        <span className="focus-input" data-placeholder="Nome"></span>
                    </div>
    
                    <div className="wrap-input">
                        <input
                            className={this.state.cpf !== "" ? 'has-val input' : 'input'}
                            type="cpf"
                            value={this.state.cpf}
                            onChange={e => this.setState({cpf: e.target.value})}
                            style={{color: "whitesmoke"}}
                            required
                        />
                        <span className="focus-input" data-placeholder="Cpf"></span>
                    </div>

                    <div className="wrap-input">
                        <input
                            className={this.state.senha !== "" ? 'has-val input' : 'input'}
                            type="password"
                            value={this.state.senha}
                            onChange={e => this.setState({senha: e.target.value})}
                            style={{color: "whitesmoke"}}
                            required
                        />
                        <span className="focus-input" data-placeholder="Senha"></span>
                    </div>

                    <div className="wrap-input">
                        <input
                            className={this.state.senhaConf !== "" ? 'has-val input' : 'input'}
                            type="password"
                            value={this.state.senhaConf}
                            onChange={e => this.setState({senhaConf: e.target.value})}
                            style={{color: "whitesmoke"}}
                            required
                        />
                        <span className="focus-input" data-placeholder="Confimacao (Senha)"></span>
                    </div>
    
                    <div className="container-login-form-btn">
                        <button className="login-form-btn">Registrar</button>
                    </div>
    
                    <div className="text-center">
                        <span className="txt1">Já possui conta?</span>
                        <Link className="txt2" to="/login">Acessar com Email e Senha.</Link>
                    </div>
    
                </form>
            </LayoutComponentes>
        );
    }
    
}

export default Register;