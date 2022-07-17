import React from "react";
import Carrossel from "../components/carrossel/Carrossel";
import Depoimento from "../components/depoimento/Depoimento";
import logo from "../imgs/logo.svg";
import "./Home.css";

class Home extends React.Component{
    
    render() {
        return (
            <div className="home">
                <div className="hero-segment"> 
                    <div className="hero-description">
                        <h1>Titulo Chamativo</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a risus placerat, finibus nisl volutpat, porttitor ante. Nunc ut ligula fermentum, interdum nibh in, luctus dui.</p>
                    </div>
    
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gVEHqaDAJNh1FKY4NHruLgHaE8%26pid%3DApi&f=1"/>
                </div>
    
                <div className="depoimento-segment">
                    <Carrossel>
                        <Depoimento
                            src={logo}
                            nome="Marcos"
                            curso="Ciencia da Computacao"
                            depoimento="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a turpis vel tortor posuere auctor sit amet quis diam. Ut magna felis, ullamcorper et nibh eu, auctor dapibus ante. Cras sollicitudin gravida dui. Ut sit amet aliquam ante. Donec porttitor, leo non pellentesque porttitor. "
                        />
                        <Depoimento
                            src={logo}
                            nome="Claudio"
                            curso="Ciencia da Computacao"
                            depoimento="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a turpis , ac tristique arcu lorem nec orci. "
                        />
                        <Depoimento
                            src={logo}
                            nome="Alerandro"
                            curso="Ciencia da Computacao"
                            depoimento="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a turpis vel tortor posuere auctor sit amet quis diam. Ut magna felis, ullamcorper et nibh eu, auctor dapibus ante. Cras sollicitudin gravida dui. Ut sit amet aliquam ante. Donec porttitor, leo non pellentesque porttitor, purus dolor laoreet erat, ac tristique arcu lorem nec orci. "
                        />
                        <Depoimento
                            src={logo}
                            nome="Luis"
                            curso="Ciencia da Computacao"
                            depoimento="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper et nibh eu, auctor dapibus ante. Cras sollicitudin gravida dui. Ut sit amet aliquam ante. Donec porttitor, leo non pellentesque porttitor, purus dolor laoreet erat, ac tristique arcu lorem nec orci. "
                        />
                    </Carrossel>
                    <div className="hero-description">
                        <h2>Titulo Chamativo</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a risus placerat, finibus nisl volutpat, porttitor ante. Nunc ut ligula fermentum, interdum nibh in, luctus dui.</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;