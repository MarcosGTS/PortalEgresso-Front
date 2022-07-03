import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/logo_ufma.png';
import LayoutComponentes from '../components/layoutCompent/LayoutComponents';
import "./Login.css";

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <LayoutComponentes>
            <form className="login-form">
                <span className="login-form-title">Bem Vindo!</span>
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

                <div className="container-login-form-btn">
                    <button className="login-form-btn">Login</button>
                </div>

                <div className="text-center">
                    <sapn className="txt1">Não possui conta?</sapn>
                    <Link className="txt2" to="/registro">Criar Conta</Link>
                </div>

            </form>
        </LayoutComponentes>
    );
}

export default Login;