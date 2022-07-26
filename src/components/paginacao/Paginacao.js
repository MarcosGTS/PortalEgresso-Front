import {useState} from "react";
import "./Paginacao.css";

function Paginacao(props) {
    const { children } = props
    const [index, setIndex] = useState(0);
    
    function changeIndex(e) {
        const children = [...e.target.parentNode.children]
        setIndex(children.indexOf(e.target));
    }

    return (<div className="paginacao-container"
        style={{
            backgroundColor: "#282c34",
            margin: "50px 0"
        }}
    >
        {children.map((child, i) => {
            if(i === index) 
                return <button onClick={changeIndex} style={{backgroundColor: "#0d6efd"}}>{child.props.name}</button>
            
            return <button onClick={changeIndex} style={{backgroundColor: "#666"}}>{child.props.name}</button>
        })}

        <div>
            {props.children[index]}
        </div> 
    </div>)
}

export default Paginacao;