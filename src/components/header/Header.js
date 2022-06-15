import "./Header.css";
import { Link } from "react-router-dom";

function Header (props) {
    return (
        <header className="header">
            <Link to="/"><img src={props.logo} className="logo" alt="logo"/></Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/depoimentos">Depoimentos</Link></li>
                <li><Link to="/egressos">Egressos</Link></li>
            </ul>
            <button onClick={e => window.location.href = "/login"}>Login</button>
        </header>
    )
}

export default Header;