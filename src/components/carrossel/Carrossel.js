import React, {useState, Children} from 'react';
import './Carrossel.css';

function Carrossel({ children }) {
    const [index, setIndex] = useState(0);
    const buttons = Children.toArray(children);
    
    function changeIndex(e) {
        const children = [...e.target.parentNode.children]
        setIndex(children.indexOf(e.target));
    }

  
    return (
        <div className='carrossel'>
            <div className='buttons-container'>
                {buttons.map(child => 
                    {if (buttons.length > 1) {
                        return <div onClick={changeIndex} className="radio-button"></div>
                    }}
                )}
            </div>
            {children[index]} 
        </div>)

    

}

export default Carrossel;