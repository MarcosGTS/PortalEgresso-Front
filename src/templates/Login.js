import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/logo_ufma.png';
import LayoutComponentes from '../components/layoutCompent/LayoutComponents';
import "./Login.css";
import ApiService from '../services/ApiService';
import axios from 'axios';

class Login extends React.Component {

    state = {
        email: '',
        senha: '',
    }

    constructor () {
        super() 
        this.service = new ApiService("/login");
    }

    login(email, senha) {

        const obj = {email, senha};
        const headers = {
            token: ""
        }

        axios.post("http://localhost:8080/login", obj, headers)
            .then(response => {
                console.log(response);
            })
            .catch(erro => {
                console.log(erro);
            })
    }

    render () {
        // const [email, setEmail] = useState("")
        // const [password, setPassword] = useState("")

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
                            className={this.state.email !== "" ? 'has-val input' : 'input'}
                            type="email"
                            onChange={e => this.setState({email: e.target.value})}
                        />
                        <span className="focus-input" data-placeholder="Email"></span>
                    </div>
    
                    <div className="wrap-input">
                        <input
                            className={this.state.senha !== "" ? 'has-val input' : 'input'}
                            type="password"
                            onChange={e => this.setState({senha: e.target.value})}
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