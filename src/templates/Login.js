import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/logo_ufma.png';
import LayoutComponentes from '../components/layoutCompent/LayoutComponents';
import "./Login.css";
import ApiService from '../services/ApiService';
import axios from 'axios';
import EgressoService from '../services/EgressoService';

class Login extends React.Component {

    state = {
        email: '',
        senha: '',
    }

    constructor () {
        super() 
        this.service = new ApiService("/login");
        this.egressoService = new EgressoService();
    }

    login(email, senha) {

        const obj = {email, senha};

        this.egressoService.obterIdporEmail(email)
            .then(response => {
                const id = response.data.id;
                const foto = response.data.url_foto;

                localStorage.setItem("Id", id);
                localStorage.setItem("Foto", foto);
            })
            .catch(erro => {
                console.log(erro);
            })


        axios.post("http://localhost:8080/login", obj)
            .then(response => {
                const token = response.data["Token"];
                localStorage.setItem("Token", token);

                window.location.href = "/config";
            })
            .catch(erro => {
                alert(`${erro}`);
            })
    }

    render () {
        
        return (
            <LayoutComponentes>
                <form className="login-form" 
                    onSubmit={(e) => {
                        e.preventDefault();
                        this.login(this.state.email, this.state.senha);
                    }}>

                    <span className="login-form-title">Bem Vindo!</span>
                    <span className="login-form-title">
                        <img src={logo} alt="Jovem progaramador" />
                    </span>
    
                    <div className="wrap-input">
                        <input
                            style={{color: "whitesmoke"}}
                            className={this.state.email !== "" ? 'has-val input' : 'input'}
                            type="email"
                            value={this.state.email}
                            onChange={e => this.setState({email: e.target.value})}
                            required
                        />
                        <span className="focus-input" data-placeholder="Email"></span>
                    </div>
    
                    <div className="wrap-input">
                        <input
                            style={{color: "whitesmoke"}}
                            className={this.state.senha !== "" ? 'has-val input' : 'input'}
                            type="password"
                            value={this.state.senha}
                            onChange={e => this.setState({senha: e.target.value})}
                            required
                        />
                        <span className="focus-input" data-placeholder="password"></span>
                    </div>
    
                    <div className="container-login-form-btn">
                        <button className="login-form-btn">Login</button>
                    </div>
    
                    <div className="text-center">
                        <span className="txt1">Não possui conta?</span>
                        <Link className="txt2" to="/registro">Criar Conta</Link>
                    </div>
    
                </form>
            </LayoutComponentes>
        );
    }
   
}

export default Login;