import Depoimento from "../components/depoimento/Depoimento";
import "./Depoimentos.css";
import logo from "../logo.svg";

function Depoimentos() {
    return (
        <>            
            <div className="depoimentos-body"> 
                <div className="apresentacao">
                    <h1>Depoimentos</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque risus erat, efficitur et iaculis id, ultricies et ex. In lacus sem, fermentum in enim nec, ornare lobortis nisi. Suspendisse potenti. Maecenas maximus aliquet ligula, ut aliquet sem ornare id. Mauris ante libero, porttitor eget arcu quis, consectetur maximus ante. Phasellus maximus semper nulla id tempus.</p>
                </div>
                <input type="text"></input>
                <hr/>
                <div className="container-depoimentos">
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
                </div>
            </div>
        </>

    )
}

export default Depoimentos;