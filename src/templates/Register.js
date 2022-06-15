import LayoutComponentes from "../LayoutComponents/LayoutComponents";
import { useState } from 'react';
import logo from '../logo_ufma.png'

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")

    return (
        <LayoutComponentes>
            <form className="login-form">
                <span className="login-form-title">Criar Conta</span>
                <span className="login-form-title">
                    <img src={logo} alt="Jovem progaramador" />
                </span>

                <div className="wrap-input">
                    <input
                        className={email !== "" ? 'has-val input' : 'input'}
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={password !== "" ? 'has-val input' : 'input'}
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="password"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={nome !== "" ? 'has-val input' : 'input'}
                        type="nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Nome"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={cpf !== "" ? 'has-val input' : 'input'}
                        type="cpf"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
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

export default Register;