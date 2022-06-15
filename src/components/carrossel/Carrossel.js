import {useState} from 'react';
import './Carrossel.css';

function Carrossel(props) {
    const [index, setIndex] = useState(0);
    
    function changeIndex(e) {
        const children = [...e.target.parentNode.children]
        setIndex(children.indexOf(e.target));
    }

    return (
    <div className='carrossel'>
        <div className='buttons-container'>
           <div onClick={changeIndex} className="radio-button"></div>
           <div onClick={changeIndex} className="radio-button"></div>
           <div onClick={changeIndex} className="radio-button"></div>
           <div onClick={changeIndex} className="radio-button"></div>
       </div>
       {props.children[index]} 
    </div>)
}

export default Carrossel;