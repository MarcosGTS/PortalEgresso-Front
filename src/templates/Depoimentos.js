import Depoimento from "../components/depoimento/Depoimento";
import "./Depoimentos.css";
import logo from "../logo.svg";
import React from "react";
import DepoimentoService from "../services/DepoimentoService";

class Depoimentos extends React.Component {
    state = {
        depoimentos: [
            // {
            //     texto: "Lorem impsum",
            //     egresso: {
            //         url_foto: logo,
            //         nome:"marcos"
            //     },
                
            // },
        ],
    }

    constructor() {
        super();
        this.service = new DepoimentoService();
    }

    componentDidMount() {
        this.service.obterTodosDepoimentos()
            .then(response => {
                console.log(response.data);
                this.setState({depoimentos: response.data});
            })
            .catch(erro => {
                console.log(erro.response);
            })
    }


    render() {
        return (<>            
                <div className="depoimentos-body"> 
                    <div className="apresentacao">
                        <h1>Depoimentos</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque risus erat, efficitur et iaculis id, ultricies et ex. In lacus sem, fermentum in enim nec, ornare lobortis nisi. Suspendisse potenti. Maecenas maximus aliquet ligula, ut aliquet sem ornare id. Mauris ante libero, porttitor eget arcu quis, consectetur maximus ante. Phasellus maximus semper nulla id tempus.</p>
                    </div>
                    <input type="text"></input>
                    <hr/>
                    <div className="container-depoimentos">
                        {
                            this.state.depoimentos.map( depoimento => {
                                return (<Depoimento
                                    src = {depoimento.egresso.url_foto}
                                    nome= {depoimento.egresso.nome}
                                    curso= "Ciencia da computacao"
                                    depoimento={depoimento.texto}
                                />);
                            })
                        }
                        
                    </div>
                </div>
            </>)
    
    }
    
    
}

export default Depoimentos;