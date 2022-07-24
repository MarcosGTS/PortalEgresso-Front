import Depoimento from "../components/depoimento/Depoimento";
import "./Depoimentos.css";
import React from "react";
import DepoimentoService from "../services/DepoimentoService";

class Depoimentos extends React.Component {
    state = {
        depoimentos: [],
        filtro: [],
    }

    constructor() {
        super();
        const apiToken = localStorage.getItem("Token");
        this.service = new DepoimentoService(apiToken);
    }

    componentDidMount() {
        this.service.obterTodosDepoimentos()
            .then(response => {
                console.log(response.data);
                this.setState({depoimentos: response.data});
                this.setState({filtro: response.data})
            })
            .catch(erro => {
                console.log(erro.response);
            })
    }

    filtrar(texto) {
        const depoimentos = [...this.state.depoimentos];
       
        if (texto) {
            const filtro = depoimentos.filter(depoimento => {
                const nome = depoimento.egresso.nome;
                const textoDepoimento = depoimento.texto;
                
                return (`${textoDepoimento}${nome}`).toLowerCase().includes(texto);
            });

            this.setState({filtro})
        } else {
            this.setState({filtro: depoimentos})
        }
    }

    render() {
        return (<>            
                <div className="depoimentos-body"> 
                    <div className="apresentacao">
                        <h1>Depoimentos</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque risus erat, efficitur et iaculis id, ultricies et ex. In lacus sem, fermentum in enim nec, ornare lobortis nisi. Suspendisse potenti. Maecenas maximus aliquet ligula, ut aliquet sem ornare id. Mauris ante libero, porttitor eget arcu quis, consectetur maximus ante. Phasellus maximus semper nulla id tempus.</p>
                    </div>
                    <input type="text" 
                        onChange={(e) => {
                            this.filtrar(e.target.value);
                        }}
                    ></input>
                    <hr/>
                    <div className="container-depoimentos">
                        {
                            this.state.filtro.map( depoimento => {
                                return (<Depoimento
                                    href={`/perfil/${depoimento.egresso.id}`}
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