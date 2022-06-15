import {useState} from "react";
import "./Paginacao.css";

function Paginacao(props) {
    const { children } = props
    const [index, setIndex] = useState(0);
    
    function changeIndex(e) {
        const children = [...e.target.parentNode.children]
        setIndex(children.indexOf(e.target));
    }

    return (<div className="paginacao-container">
        {children.map((child) =>
            <button onClick={changeIndex}>{child.props.name}</button>
        )}

        <div>
            {props.children[index]}
        </div> 
    </div>)
}

export default Paginacao;